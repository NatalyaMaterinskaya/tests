import { testItems } from "./questions-task-11";
import { createQuestionId } from "../js/helpers/create-question-id";
import { formEl, mainContainer, testsEl, btnEl } from "../js/common";
import { createMarkup } from "../js/helpers/create-markup";
import { getCurrentDate } from "../js/helpers/get-current-date";

createQuestionId(testItems);

const markup = createMarkup(testItems);

let LCaseCounter = 0;
let SrCaseCounter = 0;

let numQuestion = 1;
let userName = null;

const LCaseYes = [11, 12, 18, 21, 23, 25, 29, 34, 39];
const LCaseNo = [42];

const SrCaseYes = [
  1, 2, 3, 5, 7, 9, 13, 14, 15, 16, 19, 22, 24, 28, 31, 33, 35, 36, 37, 38, 40,
  41, 43, 44,
];
const SrCaseNo = [4, 6, 8, 10, 17, 20, 26, 27, 30, 32, 45];

alert(
  "Інструкція: „Вам будуть запропоновані твердження, які стосуються Вашого здоров’я та характеру. Якщо Ви згодні з твердженням, натисніть “Так”, якщо ні – натисніть “Ні”. Над відповідями намагайтеся довго не замислюватися, правильних або неправильних відповідей немає."
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
    if (LCaseYes.includes(numQuestion)) {
      LCaseCounter += 1;
    }
    if (SrCaseYes.includes(numQuestion)) {
      SrCaseCounter += 1;
    }
  }
  if (evt.target.dataset.answer === "no") {
    if (LCaseNo.includes(numQuestion)) {
      LCaseCounter += 1;
    }
    if (SrCaseNo.includes(numQuestion)) {
      SrCaseCounter += 1;
    }
  }
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const date = getCurrentDate();

    const LCaseLowerLimit = (LCaseCounter / 10 - (0.16)).toFixed(2);
    const LCaseUpperLimit = (LCaseCounter / 10 + (0.16)).toFixed(2);

    const SrCaseLowerLimit = (SrCaseCounter / 35 - 0.07).toFixed(2);
    const SrCaseUpperLimit = (SrCaseCounter / 35 + 0.07).toFixed(2);
    

    const result = `<p class="user"> Тест пройшов/пройшла</p>
     <p class="user">${userName}</p>
    <p class="result"> Результат №1 = ${LCaseLowerLimit} </p>
        <p class="result"> Результат №1 = ${LCaseCounter / 10} </p>
    <p class="result"> Результат №1 = ${LCaseUpperLimit} </p>
    <p  class="result"> Результат №2 = ${SrCaseLowerLimit} </p>
    <p class="result"> Результат №2 = ${(SrCaseCounter / 35).toFixed(2)} </p>
    <p  class="result"> Результат №2 = ${SrCaseUpperLimit} </p>
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
