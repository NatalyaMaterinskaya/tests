import { testItems } from "./questions-task-14";
import { mainContainer, testsEl } from "../js/common";
import { createMarkupForThirdTest } from "../js/helpers/create-markup-for-third-test";
import { createButtonMarkup } from "../js/helpers/create-button-markup";
import { getCurrentDate } from "../js/helpers/get-current-date";

const btnEl = document.querySelector(".answer-btn-container");

const markup = createMarkupForThirdTest(testItems);

let firstCaseCounter = null;
let secondCaseCounter = null;
let thirdCaseCounter = null;
let fourthCaseCounter = null;

let firstCaseQuantity = null;
let secondCaseQuantity = null;
let thirdCaseQuantity = null;
let fourthCaseQuantity = null;

let numQuestion = 1;

alert(
  "ШАНОВНИЙ ВІЙСЬКОВОСЛУЖБОВЦЮ! Твоє завдання: оцінити твердження за 10-ти бальною шкалою, де 0 – найнижча оцінка (рівень), 10 – найвища оцінка (рівень). Питання стосуються оцінки твого власного стану і сприйняття дійсності. Пам’ятай, що твої відповіді не є поганими чи хорошими. Будь-яка відповідь – правильна. Опитування анонімне, прізвище вказувати не обов’язково."
);

testsEl.innerHTML = markup[numQuestion - 1];
const buttonMarkup = createButtonMarkup().join("");
btnEl.insertAdjacentHTML("afterbegin", buttonMarkup);

btnEl.addEventListener("click", clickItem);

function clickItem(evt) {
  const { target } = evt;
  if (!target.classList.contains("answer-btn")) {
    return;
  }
  if (Number(testsEl.firstChild.dataset.id) === 1) {
    firstCaseCounter += Number(target.dataset.answer);
    firstCaseQuantity = Number(testsEl.firstChild.dataset.num);
  }
  if (Number(testsEl.firstChild.dataset.id) === 2) {
    secondCaseCounter += Number(target.dataset.answer);
    secondCaseQuantity = Number(testsEl.firstChild.dataset.num);
  }
  if (Number(testsEl.firstChild.dataset.id) === 3) {
    thirdCaseCounter += Number(target.dataset.answer);
    thirdCaseQuantity = Number(testsEl.firstChild.dataset.num);
  }
  if (Number(testsEl.firstChild.dataset.id) === 4) {
    fourthCaseCounter += Number(target.dataset.answer);
    fourthCaseQuantity = Number(testsEl.firstChild.dataset.num);
  }
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const allResults = counter();

    const date = getCurrentDate();
    const result = `<p class="result"> Результат №1 = ${allResults.firstCaseResult} </p>
  <p class="result"> Результат №2 = ${allResults.secondCaseResult} </p>
  <p class="result"> Результат №3 = ${allResults.thirdCaseResult} </p>
  <p class="result"> Результат №4 = ${allResults.fourthCaseResult} </p>
  <b class="result"> Основний результат = ${allResults.MPS}</b>
  <div class="date">
      <span class="time">${date.currentHours}:${date.currentMinutes}</span>
      <span class="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
  </div>`;

    mainContainer.innerHTML = result;
  }

  function counter() {
    const firstCaseResult = Number(
      (firstCaseCounter / firstCaseQuantity).toFixed(2)
    );
    const secondCaseResult = Number(
      (secondCaseCounter / secondCaseQuantity).toFixed(2)
    );
    const thirdCaseResult = Number(
      (thirdCaseCounter / thirdCaseQuantity).toFixed(2)
    );
    const fourthCaseResult = Number(
      (fourthCaseCounter / fourthCaseQuantity).toFixed(2)
    );

    const MPS = (
      (firstCaseResult +
        secondCaseResult +
        thirdCaseResult +
        fourthCaseResult) /
      4
    ).toFixed(2);

    const obj = {
      firstCaseResult: firstCaseResult,
      secondCaseResult,
      thirdCaseResult,
      fourthCaseResult,
      MPS,
    };
    return obj;
  }
}
