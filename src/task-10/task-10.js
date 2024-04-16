import { testItems } from "./questions-task-10";
import { createQuestionId } from "../js/helpers/create-question-id";
import { getCurrentDate } from "../js/helpers/get-current-date";
import { createMarkupForTenthTest } from "./create-markup-for-tenth-test";
import { mainContainer } from "../js/common";

createQuestionId(testItems);

const markup = createMarkupForTenthTest(testItems);

let authorityLevel = null;
let leadershipLevel = null;
let aggregateLevel = null;

let numQuestion = 1;

alert(
  "Інструкція: Шановний експерте! Вам потрібно оцінити запропоновані твердження за 5-бальною шкалою, де 0 – найнижча оцінка (рівень), 5 – найвища оцінка (рівень). Питання стосуються оцінювання рівня авторитету визначеного командира (начальника). Опитування анонімне."
);

mainContainer.innerHTML = markup[numQuestion - 1];

const btnEl = mainContainer.lastElementChild;
btnEl.addEventListener("click", clickItem);

function clickItem(evt) {
  const { target } = evt;
  if (!target.classList.contains("btn")) {
    return;
  }
  if (numQuestion <= 20) {
    authorityLevel += Number(target.textContent);
  }
  if (numQuestion > 20) {
    leadershipLevel += Number(target.textContent);
  }
  if (numQuestion < markup.length) {
    mainContainer.innerHTML = markup[numQuestion];
    numQuestion += 1;
    const btnEl = mainContainer.lastElementChild;
    btnEl.addEventListener("click", clickItem);
  } else {
    aggregateLevel = ((authorityLevel / 20 + leadershipLevel / 20) / 2).toFixed(
      2
    );
    const date = getCurrentDate();

    const result = `<p class="result"> Результат №I = ${(authorityLevel / 20).toFixed(2)} </p>
                    <p class="result"> Результат №II = ${(leadershipLevel / 20).toFixed(2)} </p>
                      <b class="result"> Основний результат = ${aggregateLevel}</b>
                      <div class="date">
                        <span class="time">${date.currentHours}:${
      date.currentMinutes
    }</span>
                        <span class="time">${date.currentDays} ${
      date.currentMonth
    } ${date.currentYear} року</span>
                        </div>
                    `;

    mainContainer.innerHTML = result;
  }
}
