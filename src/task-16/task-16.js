import { btnEl, formEl, mainContainer, testsEl } from "../js/common";
import {
  convertDToTScores,
  convertFToTScores,
  convertHsToTScores,
  convertHyToTScores,
  convertKToTScores,
  convertLToTScores,
  convertMaToTScores,
  convertPaToTScores,
  convertPdToTScores,
  convertPtToTScores,
  convertSeToTScores,
} from "../js/helpers/convert-to-T-scores";
import { createMarkup } from "../js/helpers/create-markup";
import { createQuestionId } from "../js/helpers/create-question-id";
import { getCurrentDate } from "../js/helpers/get-current-date";
import { testItems } from "./questions-task-16";

const resultMarkup = (value) => {
  if (value>=40 && value<=70) {
    return `<span class="result"> ${value}</span>`;
  } else {
    return `<b class="result"> ${value}</b>`;
  }
};

createQuestionId(testItems);

const markup = createMarkup(testItems);

let L = 0;
let F = 0;
let K = 0;
let Hs = 0;
let D = 0;
let Hy = 0;
let Pd = 0;
let Pa = 0;
let Pt = 0;
let Se = 0;
let Ma = 0;

let numQuestion = 1;
let userName = null;

const LCaseNo = [5, 11, 24, 47, 53];

const FCaseYes = [9, 12, 15, 19, 30, 38, 48, 49, 58, 59, 64, 71];
const FCaseNo = [22, 24, 61];

const KCaseNo = [
  11, 23, 31, 33, 34, 36, 40, 41, 43, 51, 56, 61, 65, 67, 69, 70,
];

const HsCaseYes = [9, 18, 26, 32, 44, 46, 55, 62, 63];
const HsCaseNo = [1, 2, 6, 37, 45];

const DCaseYes = [9, 13, 17, 18, 22, 25, 36, 44];
const DCaseNo = [1, 3, 6, 11, 28, 37, 40, 42, 60, 65, 71];

const HyCaseYes = [9, 13, 18, 26, 44, 46, 55, 57, 62];
const HyCaseNo = [
  1, 2, 3, 11, 23, 28, 29, 31, 33, 35, 37, 40, 41, 43, 45, 50, 56,
];

const PdCaseYes = [7, 10, 13, 14, 15, 16, 22, 27, 52, 58, 71];
const PdCaseNo = [3, 28, 34, 35, 41, 43, 50, 65];

const PaCaseYes = [5, 8, 10, 15, 30, 39, 63, 64, 66, 68];
const PaCaseNo = [28, 29, 31, 67];

const PtCaseYes = [5, 8, 13, 17, 22, 25, 27, 36, 44, 51, 57, 66, 68];
const PtCaseNo = [2, 3, 42];

const SeCaseYes = [
  5, 7, 8, 10, 13, 14, 15, 16, 17, 26, 30, 38, 39, 46, 57, 63, 64, 66,
];
const SeCaseNo = [3, 42];

const MaCaseYes = [4, 7, 8, 21, 29, 34, 38, 39, 54, 57, 60];
const MaCaseNo = [43];

alert(
  "Інструкція:„Нижче слідують твердження, що стосуються стану Вашого здоров'я і Вашого характеру. Прочитайте кожне твердження і вирішіть, вірно воно чи невірно по відношенню до Вас. Не витрачайте часу на роздумування. Найбільш природно те рішення, яке першим приходить в голову. Варіанти відповідей “так” або “ні”. Відповідати потрібно на всі питання підряд, нічого не пропускаючи.”"
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
    if (FCaseYes.includes(numQuestion)) {
      F += 1;
    }
    if (HsCaseYes.includes(numQuestion)) {
      Hs += 1;
    }
    if (DCaseYes.includes(numQuestion)) {
      D += 1;
    }
    if (HyCaseYes.includes(numQuestion)) {
      Hy += 1;
    }
    if (PdCaseYes.includes(numQuestion)) {
      Pd += 1;
    }
    if (PaCaseYes.includes(numQuestion)) {
      Pa += 1;
    }
    if (PtCaseYes.includes(numQuestion)) {
      Pt += 1;
    }
    if (SeCaseYes.includes(numQuestion)) {
      Se += 1;
    }
    if (MaCaseYes.includes(numQuestion)) {
      Ma += 1;
    }
  }
  if (evt.target.dataset.answer === "no") {
    if (LCaseNo.includes(numQuestion)) {
      L += 1;
    }
    if (FCaseNo.includes(numQuestion)) {
      F += 1;
    }
    if (KCaseNo.includes(numQuestion)) {
      K += 1;
    }
    if (HsCaseNo.includes(numQuestion)) {
      Hs += 1;
    }
    if (DCaseNo.includes(numQuestion)) {
      D += 1;
    }
    if (HyCaseNo.includes(numQuestion)) {
      Hy += 1;
    }
    if (PdCaseNo.includes(numQuestion)) {
      Pd += 1;
    }
    if (PaCaseNo.includes(numQuestion)) {
      Pa += 1;
    }
    if (PtCaseNo.includes(numQuestion)) {
      Pa += 1;
    }
    if (SeCaseNo.includes(numQuestion)) {
      Se += 1;
    }
    if (MaCaseNo.includes(numQuestion)) {
      Ma += 1;
    }
  }

  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const date = getCurrentDate();
    
     console.log("K", K);

     console.log("PD", Pd);

    Hs = Hs + Math.round(0.5 * K);
    Pd = Pd + Math.round(0.4 * K);
    Pt = Pt + K;
    Se = Se + K;
    Ma = Ma + Math.round(0.2 * K);

     console.log("PD", Pd);

    const T_L = convertLToTScores(L);
    const T_F = convertFToTScores(F);
    const T_K = convertKToTScores(K);
    const T_Hs = convertHsToTScores(Hs);
    const T_D = convertDToTScores(D);
    const T_Hy = convertHyToTScores(Hy);
    const T_Pd = convertPdToTScores(Pd);
    const T_Pa = convertPaToTScores(Pa);
    const T_Pt = convertPtToTScores(Pt);
    const T_Se = convertSeToTScores(Se);
    const T_Ma = convertMaToTScores(Ma);

    const result = `<p class="user">${userName}</p>
  <p class="result"> Результат №1 = ${resultMarkup(T_L)}</p>
  <p class="result"> Результат №2 = ${resultMarkup(T_F)}</p>
  <p class="result"> Результат №3 = ${resultMarkup(T_K)}</p>
  <p class="result"> Результат №4 = ${resultMarkup(T_Hs)}</p>
  <p class="result"> Результат №5 = ${resultMarkup(T_D)}</p>
  <p class="result"> Результат №6 = ${resultMarkup(T_Hy)}</p>
  <p class="result"> Результат №7 = ${resultMarkup(T_Pd)}</p>
  <p class="result"> Результат №8 = ${resultMarkup(T_Pa)}</p>
  <p class="result"> Результат №9 = ${resultMarkup(T_Pt)}</p>
  <p class="result"> Результат №10 =${resultMarkup(T_Se)}</p>
  <p class="result"> Результат №11 =${resultMarkup(T_Ma)}</p>
  <div class="date">
      <span class="time">${date.currentHours}:${date.currentMinutes}</span>
      <span class="time">${date.currentDays} ${date.currentMonth} ${
      date.currentYear
    } року</span>
  </div>`;

    mainContainer.innerHTML = result;
  }
};

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
btnEl.addEventListener("click", clickItem);
