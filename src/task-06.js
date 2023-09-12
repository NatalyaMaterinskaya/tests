import { sixthTestItemsRightCharacteristics } from "./js/questions";
import { createMarkupForSixthTest } from "./js/helpers/create-markup-for-sixth-test";
import { formEl } from "./js/common";
import { getCurrentDate } from "./js/helpers/get-current-date";

const mainContainerEl = document.querySelector(".container");
const titleEl = document.querySelector(".title-wrapper");
const testWrapperEl = document.querySelector(".test-wrapper");

const markup = createMarkupForSixthTest(sixthTestItemsRightCharacteristics);

let trueCaseCounter = 0;
let falseCaseCounter = 0;

let numQuestion = 1;
let userName = null;

alert(
  "Інструкція: . Прочитайте уважно кожне з наведених тверджень і виберіть відповідну цифру праворуч залежно від того, як Ви почуваєтеся останнім часом. Над твердженнями довго не замислюйтесь, оскільки правильних або неправильних відповідей немає. Варіанти відповіді: 1 –ніколи або інколи; 2 – іноді; 3 – часто; 4 – майже завжди або постійно. Час заповнення – 20 хв."
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
    testWrapperEl.innerHTML = markup[numQuestion - 1];
    const btnEl = testWrapperEl.lastElementChild;
    console.dir( markup.length);
    btnEl.addEventListener("click", clickItem);
  }
};
const clickItem = (evt) => {
  const { target } = evt;
  if (!target.classList.contains("btn")) {
    return;
  }

  if (numQuestion <= markup.length) {
    switch (target.dataset.state) {
      case "true":
        trueCaseCounter += Number(target.textContent);
        break;
      case "false":
        falseCaseCounter += Number(target.dataset.value);
        break;
      default:
        console.log("Щось пішло не так...");
    }
  }
  if (numQuestion < markup.length) {
    testWrapperEl.innerHTML = markup[numQuestion];
    const btnEl = testWrapperEl.lastElementChild;
    btnEl.addEventListener("click", clickItem);
    numQuestion += 1;
  } else {
    const date = getCurrentDate();

    mainContainerEl.classList.remove("main-wrapper");

    const result = `<p class="user"> Тест пройшов</p>
    <p class="user">${userName}</p>
    <p class="result"> Результат = ${
      trueCaseCounter + (falseCaseCounter / 80) * 100
    } </p>`;

    mainContainerEl.innerHTML = result;

    const dateEl = `<div class="date">
        <span class="time">${date.currentHours}:${date.currentMinutes}</span>
         <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
    </div>`;
    mainContainerEl.insertAdjacentHTML("beforeend", dateEl);
  }
};

formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);
