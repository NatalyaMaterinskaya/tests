import {
  fifthTestItemsLeftCharacteristics,
  fifthTestItemsRightCharacteristics,
} from "./js/questions";
import { createQuestionId } from "./js/helpers/create-question-id";
import { createMarkup } from "./js/helpers/create-markup";
import { formEl } from "./js/common";
import { getCurrentDate } from "./js/helpers/get-current-date";
import { createMarkupForFifthTest } from "./js/helpers/create-markup-for-fifth-test";

const mainContainer = document.querySelector(".container");
const titleEl = document.querySelector(".title");
const leftWrapper = document.querySelector(".left-wrapper");
const rightWrapper = document.querySelector(".right-wrapper");

createQuestionId(fifthTestItemsLeftCharacteristics);
createQuestionId(fifthTestItemsRightCharacteristics);

const leftMarkup = createMarkup(fifthTestItemsLeftCharacteristics);
const rightMarkup = createMarkupForFifthTest(
  fifthTestItemsRightCharacteristics
);

let feelingOfWellBeingCaseCounter = 0;
let activityCaseCounter = 0;
let moodCaseCounter = 0;

let numQuestion = 1;
let userName = null;

const feelingOfWellBeingCase = [1, 2, 7, 8, 13, 14, 19, 20, 25, 26];
const activityCase = [3, 4, 9, 10, 15, 16, 21, 22, 27, 28];
const moodCase = [5, 6, 11, 12, 17, 18, 23, 24, 29, 30];

alert(
  "Інструкція: Вам необхідно співвіднести свій стан із рядом ознак за багатоступінчастою шкалою. Шкала складається з індексів (3 2 1 0 1 2 3) і розташована між тридцятьма парами слів протилежного значення, які відображають рухливість, швидкість і темп перебігу функцій (активність), силу, здоров’я, стомленість (самопочуття), а також характеристики емоційного стану (настрій). Ви маєте вибрати і позначити цифру, яка найточніше відображає Ваш стан у момент обстеження. !!!При цьому потрібно враховувати, що полюси шкал (негативний і позитивний) постійно змінюються!!!"
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
    titleEl.style.display = "flex";
    leftWrapper.innerHTML = leftMarkup[numQuestion - 1];
    rightWrapper.insertAdjacentHTML("afterbegin", rightMarkup[numQuestion - 1]);
    const btnEl = rightWrapper.firstElementChild;
    btnEl.addEventListener("click", clickItem);
  }
};
const clickItem = (evt) => {
  const { target } = evt;
  if (!target.classList.contains("btn")) {
    return;
  }

  if (numQuestion <= leftMarkup.length) {
    switch (target.dataset.state) {
      case "true":
        if (feelingOfWellBeingCase.includes(numQuestion)) {
          feelingOfWellBeingCaseCounter += 4 + Number(target.textContent);
        }
        if (activityCase.includes(numQuestion)) {
          activityCaseCounter += 4 + Number(target.textContent);
        }
        if (moodCase.includes(numQuestion)) {
          moodCaseCounter += 4 + Number(target.textContent);
        }
        break;

      case "false":
        if (feelingOfWellBeingCase.includes(numQuestion)) {
          feelingOfWellBeingCaseCounter += 4 - Number(target.textContent);
        }
        if (activityCase.includes(numQuestion)) {
          activityCaseCounter += 4 - Number(target.textContent);
        }
        if (moodCase.includes(numQuestion)) {
          moodCaseCounter += 4 - Number(target.textContent);
        }
        break;

      default:
        console.log("Полюс питання відсутній!");
    }
  }
  if (numQuestion < leftMarkup.length) {
    leftWrapper.innerHTML = leftMarkup[numQuestion];
    rightWrapper.innerHTML = rightMarkup[numQuestion];
    const btnEl = rightWrapper.firstElementChild;
    btnEl.addEventListener("click", clickItem);
    numQuestion += 1;
  } else {
    const date = getCurrentDate();

    mainContainer.classList.remove("column-wrapper");

    const result = `<p class="user"> Тест пройшов</p>
    <p class="user">${userName}</p>
    <p class="result"> Результат №1 = ${(feelingOfWellBeingCaseCounter /= 10)} </p>
    <p class="result"> Результат №2 = ${(activityCaseCounter /= 10)} </p>
    <p class="result"> Результат №3 = ${(moodCaseCounter /= 10)} </p>`;

    mainContainer.innerHTML = result;

    const dateEl = `<div class="date">
        <span class="time">${date.currentHours}:${date.currentMinutes}</span>
         <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
    </div>`;
    mainContainer.insertAdjacentHTML("beforeend", dateEl);
  }
};

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
