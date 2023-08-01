import { thirdTestItems } from "./js/questions";
import { mainContainer, testsEl } from "./js/common";
import { createMarkupForThirdTest } from "./js/create-markup-for-third-test";
import { createButtonMarkup } from "./js/helpers/create-button-markup";
import { getCurremtDate } from "./js/helpers/get-current-date";

const btnEl = document.querySelector(".answer-btn-container");

const markup = createMarkupForThirdTest(thirdTestItems);

let firstCaseCounter = null;
let secondCaseCounter = null;
let thirdCaseCounter = null;
let fourthCaseCounter = null;
let fifthCaseCounter = null;
let sixthCaseCounter = null;

let firstCaseQuantity = null;
let secondCaseQuantity = null;
let thirdCaseQuantity = null;
let fourthCaseQuantity = null;
let fifthCaseQuantity = null;
let sixthCaseQuantity = null;

let numQuestion = 1;

// alert(
//   "ШАНОВНИЙ ВІЙСЬКОВОСЛУЖБОВЦЮ! Твоє завдання: оцінити твердження за 10-ти бальною шкалою, де 0 – найнижча оцінка (рівень), 10 – найвища оцінка (рівень). Питання стосуються оцінки твого власного стану і сприйняття дійсності. Пам’ятай, що твої відповіді не є поганими чи хорошими. Будь-яка відповідь – правильна. Опитування анонімне, прізвище вказувати не обов’язково."
// );

testsEl.innerHTML = markup[numQuestion - 1];
const buttonMarkup = createButtonMarkup().join("");
btnEl.insertAdjacentHTML("afterbegin", buttonMarkup);

const clickItem = (evt) => {
  const { target } = evt;
  if (!target.classList.contains("answer-btn")) {
    return;
  }
  if (Number(testsEl.firstChild.dataset.id) === 1) {
    firstCaseCounter += Number(target.dataset.answer);
    firstCaseQuantity = Number(testsEl.firstChild.dataset.num);
    console.log(numQuestion);
    console.log("firstCaseCounter " + firstCaseCounter);
  }
  if (Number(testsEl.firstChild.dataset.id) === 2) {
    secondCaseCounter += Number(target.dataset.answer);
    secondCaseQuantity = Number(testsEl.firstChild.dataset.num);
    console.log(numQuestion);
    console.log("secondCaseCounter " + secondCaseCounter);
  }
  if (Number(testsEl.firstChild.dataset.id) === 3) {
    thirdCaseCounter += Number(target.dataset.answer);
    thirdCaseQuantity = Number(testsEl.firstChild.dataset.num);
    console.log(numQuestion);
    console.log("thirdCaseCounter " + thirdCaseCounter);
  }
  if (Number(testsEl.firstChild.dataset.id) === 4) {
    fourthCaseCounter += Number(target.dataset.answer);
    fourthCaseQuantity = Number(testsEl.firstChild.dataset.num);
    console.log(numQuestion);
    console.log("fourtgaseCounter " + fourthCaseCounter);
  }
  if (Number(testsEl.firstChild.dataset.id) === 5) {
    fifthCaseCounter += Number(target.dataset.answer);
    fifthCaseQuantity = Number(testsEl.firstChild.dataset.num);
    console.log(numQuestion);
    console.log("fifthCaseCounter " + fifthCaseCounter);
  }
  if (Number(testsEl.firstChild.dataset.id) === 6) {
    sixthCaseCounter += Number(target.dataset.answer);
    sixthCaseQuantity = Number(testsEl.firstChild.dataset.num);
    console.log(numQuestion);
    console.log("sixthCaseCounter " + sixthCaseCounter);
  }
  if (numQuestion < markup.length) {
    testsEl.innerHTML = markup[numQuestion];
    numQuestion += 1;
  } else {
    const firstCaseResult = Number((firstCaseCounter / firstCaseQuantity).toFixed(2));
    const secondCaseResult = Number((secondCaseCounter / secondCaseQuantity).toFixed(2));
    const thirdCaseResult = Number((thirdCaseCounter / thirdCaseQuantity).toFixed(2));
    const fourthCaseResult = Number((fourthCaseCounter / fourthCaseQuantity).toFixed(2));
    const fifthCaseResult = Number((fifthCaseCounter / fifthCaseQuantity).toFixed(2));
    const sixthCaseResult = Number((sixthCaseCounter / sixthCaseQuantity).toFixed(2));

    console.log(typeof sixthCaseResult);

    const MPS = ((firstCaseResult + secondCaseResult + thirdCaseResult +fourthCaseResult + fifthCaseResult + sixthCaseResult) / 6).toFixed(2);

    const date = getCurremtDate();

    const result = `<p class="result"> Результат №1 = ${firstCaseResult} </p>
    <p class="result"> Результат №2 = ${secondCaseResult} </p>
    <p class="result"> Результат №3 = ${thirdCaseResult} </p>
    <p class="result"> Результат №4 = ${fourthCaseResult} </p>
    <p class="result"> Результат №5 = ${fifthCaseResult} </p>
    <p class="result"> Результат №6 = ${sixthCaseResult} </p>
    <b class="result"> Основний результат = ${MPS}</b>
    <div class="date">
        <span class="time">${date.currentHours}:${date.currentMinutes}</span>
         <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
    </div>`;

    mainContainer.innerHTML = result;
  }
};

btnEl.addEventListener("click", clickItem);

// if (Number(testsEl.firstChild.dataset.id) === 7) {
//   btnEl.addEventListener("click", () => {
//     btnEl.removeEventListener("click", clickItem);
//     console.log("click event listener was removed from btn");
//   });
//   printSevenBlock();
//   mainContainer.innerHTML = " ";
//   let markupForSevenBlock = [
//     `<li class="btn-item">
//         <button class="answer-btn" type="button"> Я – патріот. </button>
//         </li>`,
//     `<li class="btn-item">
//         <button class="answer-btn" type="button"> Захищати незалежність, територіальну цілісність і суверенітет України – це мій громадянський обов’язок. </button>
//         </li>`,
//     `<li class="btn-item">
//         <button class="answer-btn" type="button"> Захищаю Український народ, свою національну культуру, мову, історію, традиції. </button>
//         </li>`,
//     `<li class="btn-item">
//         <button class="answer-btn" type="button"> Захищаю свій дім, рідних та близьких. </button>
//         </li>`,
//     `<li class="btn-item">
//         <button class="answer-btn" type="button"> Прагну помститися за своїх побратимів, рідних та близьких. </button>
//         </li>`,
//     `<li class="btn-item">
//         <button class="answer-btn" type="button">Високий рівень грошового забезпечення. </button>
//         </li>`,
//     `<li class="btn-item">
//         <button class="answer-btn" type="button"> Інше </button>
//         </li>`,
//   ];
// }
