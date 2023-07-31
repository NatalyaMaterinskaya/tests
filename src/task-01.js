import { firstTestItems as firstTestItems } from "./js/questions";
import { createQuestionId } from "./js/helpers/create-question-id";
import { formEl, mainContainer, testsEl, btnEl } from "./js/common";
import { createMarkup } from "./js/helpers/create-markup";
import { getCurremtDate } from "./js/helpers/get-current-date";

createQuestionId(firstTestItems);

const markup = createMarkup(firstTestItems);

let firstCaseCounter = 0;
let secondCaseCounter = 0;
let thirdCaseCounter = 0;

let numQuestion = 1;
let userName = null;

const firstCaseYes = [
  4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24, 27, 28, 29,
  31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 68, 69, 70, 71, 72,
  73, 74, 76, 77,
];
const firstCaseNo = [1, 2, 3, 11, 16, 21, 25, 26, 30, 38, 42, 62, 67, 75];

const secondCaseYes = [
  6, 7, 12, 13, 14, 18, 27, 31, 32, 33, 34, 37, 41, 43, 46, 48, 49, 51, 52, 53,
  55, 57, 58, 59, 60, 61, 63, 64, 71, 72, 73, 74,
];
const secondCaseNo = [1, 2, 9, 11, 21, 25, 26, 30, 38, 42, 67];

const thirdCaseYes = [
  3, 4, 5, 8, 10, 15, 17, 19, 20, 22, 23, 24, 28, 29, 35, 36, 39, 40, 44, 45,
  47, 50, 54, 56, 65, 66, 68, 69, 70, 76, 77,
];
const thirdCaseNo = [16, 62, 75];

alert(
  "Інструкція: „Зараз Вам буде запропоновано відповісти тільки „Так” (+) або „Ні”  (-) на ряд питань. Питання стосуються безпосередньо Вашого самопочуття, поведінки або характеру. „Правильних” або „неправильних” відповідей тут бути не може, тому не намагайтеся довго їх обдумувати або радитися з товаришами – давайте відповідь виходячи з того, що більше відповідає Вашому стану або уявленню про самого себе. "
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
    testsEl.innerHTML = markup[numQuestion - 1];
    btnEl.style.display = "flex";
  }
};

const clickItem = (evt) => {
  const { target } = evt;
  if (!target.classList.contains("answer-btn")) {
    return;
  }
  if (evt.target.dataset.answer === "yes") {
    if (firstCaseYes.includes(numQuestion)) {
      firstCaseCounter += 1;
    }
    if (secondCaseYes.includes(numQuestion)) {
      secondCaseCounter += 1;
    }
    if (thirdCaseYes.includes(numQuestion)) {
      thirdCaseCounter += 1;
    }
  }
  if (evt.target.dataset.answer === "no") {
    if (firstCaseNo.includes(numQuestion)) {
      firstCaseCounter += 1;
    }
    if (secondCaseNo.includes(numQuestion)) {
      secondCaseCounter += 1;
    }
    if (thirdCaseNo.includes(numQuestion)) {
      thirdCaseCounter += 1;
    }
  }
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const date = getCurremtDate();

    const result = `<p class="user"> Тест пройшов/пройшла</p>
     <p class="user">${userName}</p>
    <p class="result"> Результат №1 = ${firstCaseCounter} </p>
    <p class="result"> Результат №2 = ${secondCaseCounter} </p>
    <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
    <div class="date">
        <span class="time">${date.currentHours}:${date.currentMinutes}</span>
         <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
    </div>`;

    mainContainer.innerHTML = result;
  }
};

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
btnEl.addEventListener("click", clickItem);
