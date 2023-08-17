import { thirdTestItems, markupForSevenBlock } from "./js/questions";
import { mainContainer, testsEl } from "./js/common";
import { createMarkupForThirdTest } from "./js/create-markup-for-third-test";
import { createButtonMarkup } from "./js/helpers/create-button-markup";
import { getCurrentDate } from "./js/helpers/get-current-date";

const btnEl = document.querySelector(".answer-btn-container");

const markup = createMarkupForThirdTest(thirdTestItems);

let firstCaseCounter = null;
let secondCaseCounter = null;
let thirdCaseCounter = null;
let fourthCaseCounter = null;
let fifthCaseCounter = null;
let sixthCaseCounter = null;
let sevenCaseCheckbox = [];
let sevenCaseInput = "";

let firstCaseQuantity = null;
let secondCaseQuantity = null;
let thirdCaseQuantity = null;
let fourthCaseQuantity = null;
let fifthCaseQuantity = null;
let sixthCaseQuantity = null;

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
  if (Number(testsEl.firstChild.dataset.id) === 5) {
    fifthCaseCounter += Number(target.dataset.answer);
    fifthCaseQuantity = Number(testsEl.firstChild.dataset.num);
  }
  if (Number(testsEl.firstChild.dataset.id) === 6) {
    sixthCaseCounter += Number(target.dataset.answer);
    sixthCaseQuantity = Number(testsEl.firstChild.dataset.num);
  }
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    btnEl.removeEventListener("click", clickItem);

    mainContainer.innerHTML = markupForSevenBlock;

    mainContainer.addEventListener("change", changeHandler);
    mainContainer.addEventListener("input", inputHandler);
    mainContainer.addEventListener("submit", submitHandler);
  }
}

function submitHandler(evt) {
  evt.preventDefault();
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
  const fifthCaseResult = Number(
    (fifthCaseCounter / fifthCaseQuantity).toFixed(2)
  );
  const sixthCaseResult = Number(
    (sixthCaseCounter / sixthCaseQuantity).toFixed(2)
  );

  console.log(typeof sixthCaseResult);

  const MPS = (
    (firstCaseResult +
      secondCaseResult +
      thirdCaseResult +
      fourthCaseResult +
      fifthCaseResult +
      sixthCaseResult) /
    6
  ).toFixed(2);

  const date = getCurrentDate();

  const result = `<p class="result"> Результат №1 = ${firstCaseResult} </p>
  <p class="result"> Результат №2 = ${secondCaseResult} </p>
  <p class="result"> Результат №3 = ${thirdCaseResult} </p>
  <p class="result"> Результат №4 = ${fourthCaseResult} </p>
  <p class="result"> Результат №5 = ${fifthCaseResult} </p>
  <p class="result"> Результат №6 = ${sixthCaseResult} </p>
  <p class="result"> Результат №7:</p>
      <p class="result">${sevenCaseCheckbox.join("")}</p>
      <p class="result">${sevenCaseInput}</p>
  <b class="result"> Основний результат = ${MPS}</b>
  <div class="date">
      <span class="time">${date.currentHours}:${date.currentMinutes}</span>
       <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
  </div>`;

  mainContainer.innerHTML = result;
}

function changeHandler(evt) {
  const { target } = evt;
  if (target.name !== "reason") {
    return;
  }
  if (target.checked === true) {
    sevenCaseCheckbox.push(target.value);
  }
  if (target.checked === false) {
    let removeItem = sevenCaseCheckbox.indexOf(target.value);
    sevenCaseCheckbox.splice(removeItem, 1);
  }
}

function inputHandler(evt) {
  const { target } = evt;
  if (target.name !== "other") {
    return;
  }
  sevenCaseInput = target.value;
}