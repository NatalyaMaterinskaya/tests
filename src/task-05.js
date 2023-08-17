import {
  fifthTestItemsLeftCharacteristics,
  fifthTestItemsRightCharacteristics,
} from "./js/questions";
import { createQuestionId } from "./js/helpers/create-question-id";
import { createMarkup } from "./js/helpers/create-markup";
import { formEl } from "./js/common";
import { getCurrentDate } from "./js/helpers/get-current-date";
import { createButtonMarkupForFifthTest } from "./js/helpers/create-markup-for-fifth-test";

const mainContainer = document.querySelector(".test-container");
const titleEl = document.querySelector(".title");
const leftWrapper = document.querySelector(".left-wrapper");
const rightWrapper = document.querySelector(".right-wrapper");
const btnEl = document.querySelector(".button-list");

createQuestionId(fifthTestItemsLeftCharacteristics);
createQuestionId(fifthTestItemsRightCharacteristics);

const leftMarkup = createMarkup(fifthTestItemsLeftCharacteristics);
const rightMarkup = createButtonMarkupForFifthTest(
  fifthTestItemsRightCharacteristics
);

let feelingOfWellBeingCaseCounter = null;
let activityCaseCounter = null;
let moodCaseCounter = null;

let numQuestion = 1;
let userName = null;

const feelingOfWellBeingCase = [1, 2, 7, 8, 13, 14, 19, 20, 25, 26];
const activityCase = [3, 4, 9, 10, 15, 16, 21, 22, 27, 28];
const moodCase = [5, 6, 11, 12, 17, 18, 23, 24, 29, 30];

const handleInput = (event) => {
  userName = event.target.value;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { name },
  } = event.currentTarget;

  if (name.value.trim() === "") {
    alert("Введіть прізвище, ім'я, по батькові, будь ласка.");
  } else {
    console.log(userName);
    event.currentTarget.reset();
    formEl.style.display = "none";
    titleEl.style.display = "flex";
    leftWrapper.innerHTML = leftMarkup[numQuestion - 1];
    rightWrapper.insertAdjacentHTML("afterbegin", rightMarkup[numQuestion - 1]);
  }
};

// const clickItem = (evt) => {
//   const { target } = evt;
//   if (!target.classList.contains("answer-btn")) {
//     return;
//   }
//   if (target.dataset.answer === "1") {
//     resultOfAnswer += Number(target.dataset.answer);
//     firstCaseCounter += 1;
//   }
//   if (target.dataset.answer === "2") {
//     resultOfAnswer += Number(target.dataset.answer);
//   }
//   if (target.dataset.answer === "3") {
//     resultOfAnswer += Number(target.dataset.answer);
//     thirdCaseCounter += 1;
//   }
//   if (numQuestion < markup.length) {
//     testsEl.innerHTML = markup[numQuestion];
//     btnEl.innerHTML = btnMarkup[numQuestion];
//     numQuestion += 1;
//   } else {
//     const date = getCurrentDate();

//     const result = `<p class="user"> Тест пройшов/пройшла</p>
//     <p class="user">${userName}</p>
//     <p class="result"> Результат №1 = ${firstCaseCounter} </p>
//     <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
//     <b class="result"> Основний результат = ${resultOfAnswer}</b>`;

//     mainContainer.innerHTML = result;

//     if (firstCaseCounter < 7 && thirdCaseCounter >= 7) {
//       const firstCase = ` <p class="result"> Випадок №1</p>`;
//       mainContainer.insertAdjacentHTML("beforeend", firstCase);
//     }
//     if (thirdCaseCounter < 7 && firstCaseCounter >= 7) {
//       const firstCase = ` <p class="result"> Випадок №2</p>`;
//       mainContainer.insertAdjacentHTML("beforeend", firstCase);
//     }

//     const dateEl = `<div class="date">
//         <span class="time">${date.currentHours}:${date.currentMinutes}</span>
//          <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
//     </div>`;
//     mainContainer.insertAdjacentHTML("beforeend", dateEl);
//   }
// };

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
// btnEl.addEventListener("click", clickItem);
