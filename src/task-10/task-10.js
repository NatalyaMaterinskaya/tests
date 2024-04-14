import { testItems } from "./questions-task-10";
import { createQuestionId } from "../js/helpers/create-question-id";
import { getCurrentDate } from "../js/helpers/get-current-date";
import { createMarkupForTenthTest } from "../js/helpers/create-markup-for-tenth-test";
import { mainContainer } from "../js/common";

createQuestionId(testItems);

const markup = createMarkupForTenthTest(testItems);

let authorityLevel = null;
let leadershipLevel = null;
let aggregateLevel = null;

let numQuestion = 1;

mainContainer.innerHTML = markup[numQuestion - 1];

const btnEl = document.querySelector(".button-list");

btnEl.addEventListener("click", clickItem);

function clickItem(evt) {
  const { target } = evt;
  if (!target.classList.contains("btn")) {
    return;
  }
  if (numQuestion <= 20) {
    console.log("1");
    authorityLevel += Number(target.textContent);
  }
  if (numQuestion > 20) {
    console.log("2");
    leadershipLevel += Number(target.textContent);
  }
  if (numQuestion < markup.length) {
    mainContainer.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    // const date = getCurrentDate();

    const result = `<p class="result"> Результат №I = ${authorityLevel} </p>
  <p class="result"> Результат №II = ${leadershipLevel} </p>`;

    mainContainer.innerHTML = result;
  }
}
