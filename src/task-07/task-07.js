import { testItems } from "./questions-task-07";
import { createMarkup } from "../js/helpers/create-markup";
import { createButtonMarkup } from "./create-button-markup-task-07";
import { formEl, mainContainer, testsEl, btnEl } from "../js/common";
import { getCurrentDate } from "../js/helpers/get-current-date";

const markup = createMarkup(testItems);

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
        <span class="time">${date.currentHours}:${date.currentMinutes}</span>
         <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
    </div>`
      mainContainer.insertAdjacentHTML("beforeend", dateEl);
  }
};

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
btnEl.addEventListener("click", clickItem);
