import { testItems } from "./questions-task-09";
import { createQuestionId } from "../js/helpers/create-question-id";
import { formEl, mainContainer, testsEl, btnEl } from "../js/common";
import { createMarkup } from "../js/helpers/create-markup";
import { getCurrentDate } from "../js/helpers/get-current-date";

createQuestionId(testItems);

const markup = createMarkup(testItems);

let physicalAggressionCounter = 0;
let verbalAggressionCounter = 0;
let indirectAggressionCounter = 0;
let negativismCounter = 0;
let irritationCounter = 0;
let suspiciousnessCounter = 0;
let insultCounter = 0;
let autoAggressionCounter = 0;

const physicalAggressionCoefficient = 11;
const verbalAggressionCoefficient = 8;
const indirectAggressionCoefficient = 13;
const negativismCoefficient = 20;
const irritationCoefficient = 9;
const suspiciousnessCoefficient = 11;
const insultCoefficient = 13;
const autoAggressionCoefficient = 11;

let numQuestion = 1;
let userName = null;

const physicalAggressionCaseYes = [1, 25, 33, 41, 48, 55, 62, 68];
const physicalAggressionCaseNo = [9, 17];

const verbalAggressionCaseYes = [7, 15, 23, 31, 46, 53, 60, 71, 73];
const verbalAggressionCaseNo = [39, 66, 74, 75];

const indirectAggressionCaseYes = [2, 10, 18, 34, 42, 56, 63];
const indirectAggressionCaseNo = [26, 49];

const negativismCaseYes = [4, 12, 20, 28];
const negativismCaseNo = [36];

const irritationCaseYes = [3, 19, 27, 43, 50, 57, 64, 72];
const irritationCaseNo = [11, 35, 69];

const suspiciousnessCaseYes = [6, 14, 22, 30, 38, 45, 52, 59];
const suspiciousnessCaseNo = [65, 70];

const insultCaseYes = [5, 13, 21, 29, 37, 44, 51, 58];

const autoAggressionCaseYes = [8, 16, 24, 32, 40, 47, 54, 61, 67];

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
    if (physicalAggressionCaseYes.includes(numQuestion)) {
      physicalAggressionCounter += 1;
    }
    if (verbalAggressionCaseYes.includes(numQuestion)) {
      verbalAggressionCounter += 1;
    }
    if (indirectAggressionCaseYes.includes(numQuestion)) {
      indirectAggressionCounter += 1;
    }
    if (negativismCaseYes.includes(numQuestion)) {
      negativismCounter += 1;
    }
    if (irritationCaseYes.includes(numQuestion)) {
      irritationCounter += 1;
    }
    if (suspiciousnessCaseYes.includes(numQuestion)) {
      suspiciousnessCounter += 1;
    }
    if (insultCaseYes.includes(numQuestion)) {
      insultCounter += 1;
    }
    if (autoAggressionCaseYes.includes(numQuestion)) {
      autoAggressionCounter += 1;
    }
  }
  if (evt.target.dataset.answer === "no") {
    if (physicalAggressionCaseNo.includes(numQuestion)) {
      physicalAggressionCounter += 1;
    }
    if (verbalAggressionCaseNo.includes(numQuestion)) {
      verbalAggressionCounter += 1;
    }
    if (indirectAggressionCaseNo.includes(numQuestion)) {
      indirectAggressionCounter += 1;
    }
    if (negativismCaseNo.includes(numQuestion)) {
      negativismCounter += 1;
    }
    if (irritationCaseNo.includes(numQuestion)) {
      irritationCounter += 1;
    }
    if (suspiciousnessCaseNo.includes(numQuestion)) {
      suspiciousnessCounter += 1;
    }
  }
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const date = getCurrentDate();

    physicalAggressionCounter *= physicalAggressionCoefficient;
    verbalAggressionCounter *= verbalAggressionCoefficient;
    indirectAggressionCounter *= indirectAggressionCoefficient;
    negativismCounter *= negativismCoefficient;
    irritationCounter *= irritationCoefficient;
    suspiciousnessCounter *= suspiciousnessCoefficient;
    insultCounter *= insultCoefficient;
    autoAggressionCounter *= autoAggressionCoefficient;

    const result = `<p class="user"> Тест пройшов/пройшла</p>
     <p class="user">${userName}</p>
    <p class="result"> Результат №1 = ${physicalAggressionCounter} </p>
    <p class="result"> Результат №2 = ${verbalAggressionCounter} </p>
    <p class="result"> Результат №3 = ${indirectAggressionCounter} </p>
    <p class="result"> Результат №4 = ${negativismCounter} </p>
    <p class="result"> Результат №5 = ${irritationCounter} </p>
    <p class="result"> Результат №6 = ${suspiciousnessCounter} </p>
    <p class="result"> Результат №7 = ${insultCounter} </p>
    <p class="result"> Результат №8 = ${autoAggressionCounter} </p>
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
