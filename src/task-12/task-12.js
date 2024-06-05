import { testItems } from "./questions-task-12";
import { mainContainer, testsEl } from "../js/common";
import { createMarkup } from "../js/helpers/create-markup";
import { createButtonMarkup } from "./create-button-markup-for-twelfth-test";
import { getCurrentDate } from "../js/helpers/get-current-date";
import { createQuestionId } from "../js/helpers/create-question-id";

const btnEl = document.querySelector(".answer-btn-container");

createQuestionId(testItems);

const markup = createMarkup(testItems);

let counter = null;

let numQuestion = 1;

testsEl.innerHTML = markup[numQuestion - 1];
const buttonMarkup = createButtonMarkup().join("");
btnEl.insertAdjacentHTML("afterbegin", buttonMarkup);

btnEl.addEventListener("click", clickItem);

function clickItem(evt) {
  const { target } = evt;
  if (!target.classList.contains("answer-btn")) {
    return;
  }
   counter += Number(target.dataset.answer);
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const date = getCurrentDate();

    const result = `<b class="result"> Основний результат = ${counter}</b>
  <div class="date">
      <span class="time">${date.currentHours}:${date.currentMinutes}</span>
      <span class="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
  </div>`;
    mainContainer.innerHTML = result;
  }
}
