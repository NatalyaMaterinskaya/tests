import { btnEl, formEl, mainContainer, testsEl } from "../js/common";
import { createMarkup } from "../js/helpers/create-markup";
import { createQuestionId } from "../js/helpers/create-question-id";
import { getCurrentDate } from "../js/helpers/get-current-date";
import { getSTEN_D, getSTEN_NPN } from "../js/helpers/get-STEN";
import { testItems } from "./questions-task-15";

const firstResultMarkup = (value, caseCounter) => {
  if (value) {
    return `<p class="result">Результат №1 = ${caseCounter}</p>`;
  } else {
    return `<p><b class="result">Результат №1 = ${caseCounter}</b></p>`;
  }
};

const secondResultMarkup = (value, caseCounter) => {
  if (value < 8) {
    return `<p class="result">Результат №2 = ${caseCounter}: ${value}</p>`;
  } else {
    return `<p><b class="result">Результат №2 = ${caseCounter}: ${value}</b></p>`;
  }
};

createQuestionId(testItems);

const markup = createMarkup(testItems);

let firstCaseCounter = 0;
let secondCaseCounter = 0;
let thirdCaseCounter = 0;
let fourthCaseCounter = 0;
let fifthCaseCounter = 0;
let sixthCaseCounter = 0;
let seventCaseCounter = 0;

let numQuestion = 1;
let userName = null;

const firstCaseNo = [
  1, 4, 6, 24, 25, 27, 47, 49, 50, 70, 72, 93, 112, 114, 137,
];

const secondCaseYes = [
  3, 5, 23, 26, 48, 68, 89, 90, 91, 94, 111, 113, 115, 134, 135, 136, 138, 155,
  157, 158, 159, 160, 177, 178, 181, 199, 200, 202, 203, 204, 221, 222, 223,
  225, 226, 243, 244, 245, 246, 247, 248, 249, 265, 266, 267, 268, 269, 270,
  271,
];
const secondCaseNo = [
  2, 28, 45, 46, 67, 69, 71, 92, 116, 133, 156, 179, 180, 182, 201, 224,
];

const thirdCaseYes = [
  7, 8, 9, 10, 29, 31, 32, 51, 52, 53, 54, 73, 74, 75, 76, 95, 96, 97, 98, 117,
  118, 119, 120, 140, 141, 142, 161, 162, 163, 164, 183, 184, 185, 205,
  206, 207, 227, 229, 250, 251, 272, 273,
];
const thirdCaseNo = [30, 139, 228];

const fourthCaseYes = [
  11, 12, 13, 33, 34, 55, 56, 57, 77, 78, 79, 99, 100, 101, 121, 122, 123, 143,
  144, 145, 165, 166, 167, 186, 187, 188, 189, 208, 209, 210, 211, 231, 232,
  233, 252, 253, 254, 255, 274, 275, 276,
];
const fourthCaseNo = [35, 230];

const fifthCaseYes = [
  14, 15, 17, 36, 37, 38, 39, 58, 59, 60, 61, 80, 81, 82, 83, 102, 103, 105,
  124, 125, 126, 127, 146, 147, 148, 168, 169, 170, 171, 190, 192, 212, 234,
  235, 256, 257, 258,
];
const fifthCaseNo = [16, 104, 149, 191, 213, 214, 236];

const sixthCaseYes = [
  18, 19, 20, 40, 63, 85, 86, 107, 128, 129, 151, 172, 193, 215, 237, 238,
];
const sixthCaseNo = [
  41, 42, 62, 64, 84, 106, 150, 173, 194, 195, 216, 217, 239, 259, 260, 261,
];

const seventhCaseYes = [
  21, 22, 43, 44, 65, 66, 87, 88, 108, 109, 130, 131, 132, 152, 153, 154, 174,
  175, 196, 197, 198, 218, 219, 220, 240, 241, 242, 262, 263, 264,
];

alert(
  "Інструкція:„Вам буде запропоновано відповісти на ряд питань, що стосуються деяких особливостей Вашого самопочуття, поведінки, характеру. Будьте відверті, довго не роздумуйте над змістом питань, давайте відповідь, яка першим прийде Вам у голову. Пам'ятайте, що немає правильних або неправильних відповідей. Варіанти відповідей “так” або “ні”. Відповідати потрібно на всі питання підряд, нічого не пропускаючи.”"
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
    if (secondCaseYes.includes(numQuestion)) {
      secondCaseCounter += 1;
    }
    if (thirdCaseYes.includes(numQuestion)) {
      thirdCaseCounter += 1;
    }
    if (fourthCaseYes.includes(numQuestion)) {
      fourthCaseCounter += 1;
    }
    if (fifthCaseYes.includes(numQuestion)) {
      fifthCaseCounter += 1;
    }
    if (sixthCaseYes.includes(numQuestion)) {
      sixthCaseCounter += 1;
    }
    if (seventhCaseYes.includes(numQuestion)) {
      seventCaseCounter += 1;
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
    if (fourthCaseNo.includes(numQuestion)) {
      fourthCaseCounter += 1;
    }
    if (fifthCaseNo.includes(numQuestion)) {
      fifthCaseCounter += 1;
    }
    if (sixthCaseNo.includes(numQuestion)) {
      sixthCaseCounter += 1;
    }
  }

  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const date = getCurrentDate();

    const STEN_D = getSTEN_D(firstCaseCounter);
    const STEN_NPN = getSTEN_NPN(secondCaseCounter);

    const userNameMarkup = `<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${userName}</p>`;

    const result = `${userNameMarkup}
      ${firstResultMarkup(STEN_D, firstCaseCounter)}
      ${secondResultMarkup(STEN_NPN, secondCaseCounter)}
    <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
    <p class="result"> Результат №4 = ${fourthCaseCounter} </p>
    <p class="result"> Результат №5 = ${fifthCaseCounter} </p>
    <p class="result"> Результат №6 = ${sixthCaseCounter} </p>
    <p class="result"> Результат №7 = ${seventCaseCounter} </p>
    <div class="date">
        <span class="time">${date.currentHours}:${date.currentMinutes}</span>
         <spanclass="time">${date.currentDays} ${date.currentMonth} ${
      date.currentYear
    } року</span>
    </div>`;

    mainContainer.innerHTML = result;
  }
};

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
btnEl.addEventListener("click", clickItem);
