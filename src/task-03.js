import { thirdTestItems, markupForSevenBlock } from "./js/questions";
import { mainContainer, testsEl } from "./js/common";
import { createMarkupForThirdTest } from "./js/helpers/create-markup-for-third-test";
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
let checkboxCounter = 0;
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
    const submitBtnSevenBlock = document.querySelector(".answer-btn");
    submitBtnSevenBlock.disabled = true;
    submitBtnSevenBlock.classList.add("disabled");

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
      <p class="result">${sevenCaseCheckbox.join("; ")}</p>
      <p class="result">${sevenCaseInput}</p>
  <b class="result"> Основний результат = ${MPS}</b>
  <div class="date">
      <span class="time">${date.currentHours}:${date.currentMinutes}</span>
      <span class="time">${date.currentDays} ${date.currentMonth} ${
    date.currentYear
  } року</span>
  </div>`;

  mainContainer.innerHTML = result;
}

function changeHandler(evt) {
  const checkboxForm = document.querySelector(".form-question");

  const { target } = evt;
  if (target.name !== "reason") {
    return;
  }

  //Якщо обираємо
  if (target.checked === true) {
    checkboxCounter += 1;
    sevenCaseCheckbox.push(target.dataset.id);
  }

  //Якщо обрано 2 чекбокси, то робимо неактвиними інші + other
  if (checkboxCounter >= 2) {
    checkboxForm.elements.reason.forEach((element) => {
      if (element.checked === false) {
        element.disabled = true;
      }
    });
    checkboxForm.elements.other.disabled = true;
    checkboxForm.elements.other.value = "";
    sevenCaseInput = "";
  }

  //Якщо відміняємо
  if (target.checked === false) {
    checkboxCounter -= 1;
    let removeItem = sevenCaseCheckbox.indexOf(target.value);
    sevenCaseCheckbox.splice(removeItem, 1);

    //Якщо відмінили чекбокс, то робимо актвиними інші + other
    if (checkboxCounter < 2) {
      checkboxForm.elements.reason.forEach((element) => {
        if (element.checked === false) {
          element.disabled = false;
        }
      });
      checkboxForm.elements.other.disabled = false;
    }
  }

  //Якщо обрано 2 чекбокси, то робимо кнопку активною
  if (checkboxCounter === 2) {
    checkboxForm.lastElementChild.disabled = false;
    checkboxForm.lastElementChild.classList.remove("disabled");
  }
  //Якщо обрано 1 чекбокс, a other пустий, то робимо кнопку неактивною
  if (checkboxCounter === 1 && sevenCaseInput === "") {
    checkboxForm.lastElementChild.disabled = true;
    checkboxForm.lastElementChild.classList.add("disabled");
  }

  //Якщо спочатку обрано 1 чекбокс, a other не пустий,то робимо кнопку активною
  checkboxForm.elements.other.addEventListener("blur", () => {
    if (checkboxCounter === 1 && sevenCaseInput !== "") {
      checkboxForm.lastElementChild.disabled = false;
      checkboxForm.lastElementChild.classList.remove("disabled");
    }
  });

  //Якщо спочатку заповнено other, а потім обрано 1 чекбокс, то робимо кнопку активною
  if (checkboxCounter === 1 && sevenCaseInput !== "") {
    checkboxForm.lastElementChild.disabled = false;
    checkboxForm.lastElementChild.classList.remove("disabled");
  }
  if (checkboxCounter === 0 && sevenCaseInput !== "") {
    checkboxForm.lastElementChild.disabled = true;
    checkboxForm.lastElementChild.classList.add("disabled");
  }
}

function inputHandler(evt) {
  const { target } = evt;
  if (target.name !== "other") {
    return;
  }
  sevenCaseInput = target.value;
}
