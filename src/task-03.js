import {
  firstBlockItems,
  secondBlockItems,
  thirdBlockItems,
  fourthBlockItems,
  fifthBlockItems,
  sixthBlockItems,
} from "./js/questions-for-third-test";
import { formEl, mainContainer, testsEl } from "./js/common";
import { createMarkup } from "./js/helpers/create-markup";
import { createButtonMarkup } from "./js/helpers/create-button-markup";
import { getCurremtDate } from "./js/helpers/get-current-date";

const btnEl = document.querySelector(".answer-btn-container");

const markupFirstBlockItems = createMarkup(firstBlockItems);
const markupSecondBlockItems = createMarkup(secondBlockItems);
const markupThirdBlockItems = createMarkup(thirdBlockItems);
const markupFourthBlockItems = createMarkup(fourthBlockItems);
const markupFifthBlockItems = createMarkup(fifthBlockItems);
const markupSixthBlockItems = createMarkup(sixthBlockItems);

let firstCaseCounter = 0;
let secondCaseCounter = 0;
let thirdCaseCounter = 0;
let fourthCaseCounter = 0;
let fifthCaseCounter = 0;
let sixthCaseCounter = 0;

let numQuestion = 1;
let userName = null;

alert(
  "ШАНОВНИЙ ВІЙСЬКОВОСЛУЖБОВЦЮ! Твоє завдання: оцінити твердження за 10-ти бальною шкалою, де 0 – найнижча оцінка (рівень), 10 – найвища оцінка (рівень). Питання стосуються оцінки твого власного стану і сприйняття дійсності. Пам’ятай, що твої відповіді не є поганими чи хорошими. Будь-яка відповідь – правильна. Опитування анонімне, прізвище вказувати не обов’язково."
);

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
    testsEl.innerHTML = markupFirstBlockItems[numQuestion - 1];
    const buttonMarkup = createButtonMarkup().join('');
    console.log(buttonMarkup);
    btnEl.insertAdjacentHTML("afterbegin", buttonMarkup);
  }
};

// const clickItem = (evt) => {
//   const { target } = evt;
//   if (!target.classList.contains("answer-btn")) {
//     return;
//   }
//   if (evt.target.dataset.answer === "yes") {
//     if (secondCaseYes.includes(numQuestion)) {
//       secondCaseCounter += 1;
//     }
//     if (thirdCaseYes.includes(numQuestion)) {
//       thirdCaseCounter += 1;
//     }
//     if (fourthCaseYes.includes(numQuestion)) {
//       fourthCaseCounter += 1;
//     }
//     if (fifthCaseYes.includes(numQuestion)) {
//       fifthCaseCounter += 1;
//     }
//     if (sixthCaseYes.includes(numQuestion)) {
//       sixthCaseCounter += 1;
//     }
//     if (seventhCaseYes.includes(numQuestion)) {
//       seventCaseCounter += 1;
//     }
//   }
//   if (evt.target.dataset.answer === "no") {
//     if (firstCaseNo.includes(numQuestion)) {
//       firstCaseCounter += 1;
//     }
//     if (secondCaseNo.includes(numQuestion)) {
//       secondCaseCounter += 1;
//     }
//     if (thirdCaseNo.includes(numQuestion)) {
//       thirdCaseCounter += 1;
//     }
//     if (fourthCaseNo.includes(numQuestion)) {
//       fourthCaseCounter += 1;
//     }
//     if (fifthCaseNo.includes(numQuestion)) {
//       fifthCaseCounter += 1;
//     }
//     if (sixthCaseNo.includes(numQuestion)) {
//       sixthCaseCounter += 1;
//     }
//     if (seventhCaseNo.includes(numQuestion)) {
//       seventCaseCounter += 1;
//     }
//   }

//   if (numQuestion < markup.length) {
//     testsEl.innerHTML = markup[numQuestion];
//     numQuestion += 1;
//   } else {
//     const OAP = secondCaseCounter + thirdCaseCounter + fourthCaseCounter;

//     const date = getCurremtDate();

//     const result = `<p class="user"> Тест пройшов/пройшла</p>
//     <p class="user">${userName}</p>
//     <b class="result"> Результат №1 = ${firstCaseCounter} </b>
//     <p class="result"> Результат №2 = ${secondCaseCounter} </p>
//     <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
//     <p class="result"> Результат №4 = ${fourthCaseCounter} </p>
//     <p class="result"> Результат №5 = ${fifthCaseCounter} </p>
//     <p class="result"> Результат №6 = ${sixthCaseCounter} </p>
//     <p class="result"> Результат №7 = ${seventCaseCounter} </p>
//     <b class="result"> Основний результат = ${OAP}</b>
//     <div class="date">
//         <span class="time">${date.currentHours}:${date.currentMinutes}</span>
//          <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
//     </div>`;

//     mainContainer.innerHTML = result;
//   }
// };

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
//btnEl.addEventListener("click", clickItem);
