import { secondTestItems } from "./js/questions";
import { createQuestionId } from "./js/helpers/create-question-id";
import { formEl, mainContainer, testsEl, btnEl } from "./js/common";
import { createMarkup } from "./js/helpers/create-markup";
import { getCurremtDate } from "./js/helpers/get-current-date";

createQuestionId(secondTestItems);

const markup = createMarkup(secondTestItems);

let firstCaseCounter = 0;
let secondCaseCounter = 0;
let thirdCaseCounter = 0;
let fourthCaseCounter = 0;
let fifthCaseCounter = 0;
let sixthCaseCounter = 0;
let seventCaseCounter = 0;

let numQuestion = 1;
let userName = null;

const firstCaseNo = [1, 10, 19, 31, 51, 69, 78, 92, 101, 116, 128, 138, 148];

const secondCaseYes = [
  4, 6, 7, 8, 11, 12, 15, 16, 17, 18, 20, 21, 28, 29, 30, 36, 37, 39, 40, 41,
  47, 57, 60, 63, 65, 67, 68, 70, 73, 80, 82, 83, 84, 86, 89, 94, 95, 96, 98,
  102, 103, 108, 109, 110, 111, 112, 113, 115, 117, 118, 119, 120, 122, 123,
  124, 125, 127, 129, 131, 135, 136, 137, 139, 143, 146, 149, 153, 154, 155,
  156, 157, 158, 161, 162,
];
const secondCaseNo = [
  2, 3, 5, 23, 25, 32, 38, 44, 45, 52, 53, 54, 55, 58, 62, 66, 75, 87, 105, 132,
  134, 140,
];

const thirdCaseYes = [
  9, 24, 27, 43, 46, 61, 64, 81, 88, 90, 99, 104, 106, 114, 121, 126, 133, 142,
  151, 152,
];
const thirdCaseNo = [26, 34, 35, 48, 49, 74, 85, 107, 130, 144, 147, 159];

const fourthCaseYes = [
  14, 22, 33, 42, 50, 56, 59, 71, 72, 77, 79, 91, 93, 141, 145, 150, 164, 165,
];
const fourthCaseNo = [13, 76, 97, 100, 160, 163];

const fifthCaseYes = [
  166, 167, 168, 169, 170, 172, 173, 174, 175, 176, 177, 179, 180, 181, 183,
  184, 185, 186, 187, 188, 190,
];
const fifthCaseNo = [171, 178, 182, 189];

const sixthCaseYes = [
  6, 9, 14, 15, 22, 36, 39, 42, 47, 50, 56, 59, 71, 72, 91, 93, 117, 127, 141,
  145, 151, 152, 164, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
];
const sixthCaseNo = [13, 100, 163];

const seventhCaseYes = [
  4, 8, 10, 28, 29, 39, 41, 47, 70, 84, 115, 119, 124, 136, 137, 149, 154, 155,
];
const seventhCaseNo = [32, 105];

alert(
  "Інструкція:  „Зараз досліджуватимуться деякі Ваші особистісні особливості. Опитувальник містить 200 тверджень (питань) про життя, роботу, відносини у сім'ї, інтереси і схильності. Ваше завдання полягає у тому, щоб визначити своє відношення до кожного ствердження, тобто погодитися або не погодитися з ним. Якщо Ви погоджуєтеся з ствердженням, то під відповідним питанням натискаєте кнопку „Так”. Якщо Ви не згодні – натискаєте „Ні”. Правильних або неправильних відповідей тут бути не може, тому довго не замислюйтеся над питанням – давайте відповідь, виходячи з того, що більше відповідає Вашому характеру або уявленню про самого себе”."
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
    if (seventhCaseNo.includes(numQuestion)) {
      seventCaseCounter += 1;
    }
  }

  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const OAP = secondCaseCounter + thirdCaseCounter + fourthCaseCounter;

    const date = getCurremtDate();

    const result = `<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${userName}</p>
    <b class="result"> Результат №1 = ${firstCaseCounter} </b>
    <p class="result"> Результат №2 = ${secondCaseCounter} </p>
    <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
    <p class="result"> Результат №4 = ${fourthCaseCounter} </p>
    <p class="result"> Результат №5 = ${fifthCaseCounter} </p>
    <p class="result"> Результат №6 = ${sixthCaseCounter} </p>
    <p class="result"> Результат №7 = ${seventCaseCounter} </p>
    <b class="result"> Основний результат = ${OAP}</b>
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
