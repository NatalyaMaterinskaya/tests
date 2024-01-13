import { testItems } from "./questions-task-08";
import { mainContainer, testsEl } from "../js/common";
import { createMarkup } from "../js/helpers/create-markup";
import { createButtonMarkup } from "./create-button-markup-08";
import { getCurrentDate } from "../js/helpers/get-current-date";
import { createQuestionId } from "../js/helpers/create-question-id";

const btnEl = document.querySelector(".answer-btn-container");

createQuestionId(testItems);

const markup = createMarkup(testItems);

let anxietyScaleCounter = null;
let frustrationScaleCounter = null;
let scaleOfAggressionCounter = null;
let rigidityScaleCounter = null;
let indicatorOfTendencyToSuicidalBehavior = null;

let numQuestion = 1;

const anxietyScale = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37];
const frustrationScale = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38];
const scaleOfAggression = [3, 7, 11, 15, 19, 23, 27, 31, 35, 39];
const rigidityScale = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];

testsEl.innerHTML = markup[numQuestion - 1];
const buttonMarkup = createButtonMarkup().join("");
btnEl.insertAdjacentHTML("afterbegin", buttonMarkup);

btnEl.addEventListener("click", clickItem);

function clickItem(evt) {
  const { target } = evt;
  if (!target.classList.contains("answer-btn")) {
    return;
  }
  if (anxietyScale.includes(numQuestion)) {
    anxietyScaleCounter += Number(target.dataset.answer);
  }
  if (frustrationScale.includes(numQuestion)) {
    frustrationScaleCounter += Number(target.dataset.answer);
  }
  if (scaleOfAggression.includes(numQuestion)) {
    scaleOfAggressionCounter += Number(target.dataset.answer);
  }
  if (rigidityScale.includes(numQuestion)) {
    rigidityScaleCounter += Number(target.dataset.answer);
  }
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const date = getCurrentDate();

    const result = `<p class="result"> Результат №I = ${anxietyScaleCounter} </p>
  <p class="result"> Результат №II = ${frustrationScaleCounter} </p>
  <p class="result"> Результат №III = ${scaleOfAggressionCounter} </p>
  <p class="result"> Результат №IV = ${rigidityScaleCounter} </p>
  <b class="result"> Основний результат = ${
    anxietyScaleCounter +
    frustrationScaleCounter +
    scaleOfAggressionCounter +
    rigidityScaleCounter
  }</b>
  <div class="date">
      <span class="time">${date.currentHours}:${date.currentMinutes}</span>
      <span class="time">${date.currentDays} ${date.currentMonth} ${
      date.currentYear
    } року</span>
  </div>`;

    mainContainer.innerHTML = result;
  }
}