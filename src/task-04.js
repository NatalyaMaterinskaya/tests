import { fourthTestItems } from "./js/questions";
import { createQuestionId } from "./js/helpers/create-question-id";
import { createButtonMarkupForForthTest } from "./js/helpers/create-button-markup-for-forth-test";
import { formEl, mainContainer, testsEl, btnEl } from "./js/common";
import { getCurremtDate } from "./js/helpers/get-current-date";
import { createMarkup } from "./js/helpers/create-markup";

createQuestionId(fourthTestItems);

const markup = createMarkup(fourthTestItems);
const btnMarkup = createButtonMarkupForForthTest(fourthTestItems);

let firstCaseCounter = 0;
let thirdCaseCounter = 0;

let resultOfAnswer = 0;

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
    console.log(userName);
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
  if (target.dataset.answer === "1") {
    resultOfAnswer += Number(target.dataset.answer);
    firstCaseCounter += 1;
    }
    if (target.dataset.answer === "2") {
      resultOfAnswer += Number(target.dataset.answer);
    }
    if (target.dataset.answer === "3") {
      resultOfAnswer += Number(target.dataset.answer);
      thirdCaseCounter += 1;
    }
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
     btnEl.innerHTML = btnMarkup[numQuestion];
    numQuestion += 1;
  } else {

    const date = getCurremtDate();

    const result = `<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${userName}</p>
    <p class="result"> Результат №1 = ${firstCaseCounter} </p>
    <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
    <b class="result"> Основний результат = ${resultOfAnswer}</b>`;

      mainContainer.innerHTML = result;

      if (firstCaseCounter < 7 && thirdCaseCounter >= 7) {
          const firstCase = ` <p class="result"> Випадок №1</p>`;
          mainContainer.insertAdjacentHTML("beforeend", firstCase);
      }
      if (thirdCaseCounter < 7 && firstCaseCounter >= 7) {
        const firstCase = ` <p class="result"> Випадок №2</p>`;
        mainContainer.insertAdjacentHTML("beforeend", firstCase);
      }
  
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
