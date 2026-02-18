import { btnEl, formEl, mainContainer, testsEl } from "../js/common";
import { createMarkup } from "../js/helpers/create-markup";
import { getCurrentDate } from "../js/helpers/get-current-date";
import { createButtonMarkup } from "./create-button-markup-task-17";
import { testItems } from "./questions-task-17";

const markup = createMarkup(testItems);
let arr = [];

const btnMarkup = createButtonMarkup(testItems);

let markCounter = null;

let numQuestion = 1;
let userName = null;

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
    btnEl.innerHTML = btnMarkup[numQuestion - 1];
  }
};

const clickItem = (evt) => {
  const { target } = evt;
  if (!target.classList.contains("answer-btn")) {
    return;
  }
  markCounter += Number(target.dataset.mark);
  arr.push(target.dataset.mark);
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    btnEl.innerHTML = btnMarkup[numQuestion];
    numQuestion += 1;
  } else {
    const date = getCurrentDate();

    const result = `<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${userName}</p>
    <b class="result"> Результат = ${markCounter}</b>`;

    mainContainer.innerHTML = result;

    const dateEl = `<div class="date">
        <p class="time">${date.currentHours}:${date.currentMinutes}</p>
         <p class="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</p>
    </div>`;

    mainContainer.insertAdjacentHTML("beforeend", dateEl);

    mainContainer.insertAdjacentHTML(`beforeend`, `<div class="answer"></div>`);

    const answerEl = document.querySelector(".answer");

    for (let i = 0; i < arr.length; i++) {
      answerEl.insertAdjacentHTML(
        `beforeend`,
        `<p class="result">${i + 1}.${arr[i]}</p>`,
      );
    }
  }
};

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
btnEl.addEventListener("click", clickItem);
