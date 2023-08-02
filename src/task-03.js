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
let sevenCaseCheckbox = [];
let sevenCaseInput="";

let firstCaseQuantity = null;
let secondCaseQuantity = null;
let thirdCaseQuantity = null;
let fourthCaseQuantity = null;
let fifthCaseQuantity = null;
let sixthCaseQuantity = null;

let numQuestion = 47;

// alert(
//   "ШАНОВНИЙ ВІЙСЬКОВОСЛУЖБОВЦЮ! Твоє завдання: оцінити твердження за 10-ти бальною шкалою, де 0 – найнижча оцінка (рівень), 10 – найвища оцінка (рівень). Питання стосуються оцінки твого власного стану і сприйняття дійсності. Пам’ятай, що твої відповіді не є поганими чи хорошими. Будь-яка відповідь – правильна. Опитування анонімне, прізвище вказувати не обов’язково."
// );

testsEl.innerHTML = markup[numQuestion - 1];
const buttonMarkup = createButtonMarkup().join("");
btnEl.insertAdjacentHTML("afterbegin", buttonMarkup);

btnEl.addEventListener("click", clickItem);

function clickItem(evt) {
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
    btnEl.removeEventListener("click", clickItem);
    let markupForSevenBlock = [
      `<form class ="form-question">
  <p>Познач, чим обумовлена твоя готовність захищати Україну (обери два найбільш значущі для тебе твердження):</p>
  <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Я – патріот"  />
  Я – патріот.
  </label>
  <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Захищати незалежність, територіальну цілісність і суверенітет України – це мій громадянський обов’язок." />
Захищати незалежність, територіальну цілісність і суверенітет України – це мій громадянський обов’язок.
  </label>
  <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Захищаю Український народ, свою національну культуру, мову, історію, традиції." />
    Захищаю Український народ, свою національну культуру, мову, історію, традиції. 
  </label>
    <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Захищаю свій дім, рідних та близьких." />
    Захищаю свій дім, рідних та близьких.
  </label>
    <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Прагну помститися за своїх побратимів, рідних та близьких." />
    Прагну помститися за своїх побратимів, рідних та близьких.
  </label>
    <label>
    <input class ="answer-box" type="checkbox" name="reason" value="Високий рівень грошового забезпечення." />
    Високий рівень грошового забезпечення. 
  </label>
    <label>
    <input class ="answer-box" type="text" name="other" placeholder='Інше'/>
  </label>
  <button class ="answer-btn" type="submit">Підтвердити</button>
</form>`,
    ];

    mainContainer.innerHTML = markupForSevenBlock;

    mainContainer.addEventListener("change", changeHandler);
        mainContainer.addEventListener("input", inputHandler);
    mainContainer.addEventListener("submit", submitHandler);

  
  }
}
function submitHandler(evt) {
  const { target } = evt;
  if (!target.classList.contains("answer-btn")) {
    return;
  }
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
function changeHandler(evt) {
  const { target } = evt;
  if (target.name !== "reason") {
    return;
  }
  if (target.checked === true) {
    sevenCaseCheckbox.push(target.value);
    console.log(sevenCaseCheckbox);
  }
  if (target.checked === false) {
    let removeItem = sevenCaseCheckbox.indexOf(target.value);
    sevenCaseCheckbox.splice(removeItem, 1);
    console.log(sevenCaseCheckbox);
  }
}
function inputHandler(evt) {
   const { target } = evt;
   if (target.name !== "other"){
     return;
   }
  sevenCaseInput = target.value;
    console.log(sevenCaseInput);
}
// const firstCaseResult = Number((firstCaseCounter / firstCaseQuantity).toFixed(2));
// const secondCaseResult = Number((secondCaseCounter / secondCaseQuantity).toFixed(2));
// const thirdCaseResult = Number((thirdCaseCounter / thirdCaseQuantity).toFixed(2));
// const fourthCaseResult = Number((fourthCaseCounter / fourthCaseQuantity).toFixed(2));
// const fifthCaseResult = Number((fifthCaseCounter / fifthCaseQuantity).toFixed(2));
// const sixthCaseResult = Number((sixthCaseCounter / sixthCaseQuantity).toFixed(2));

// console.log(typeof sixthCaseResult);

// const MPS = ((firstCaseResult + secondCaseResult + thirdCaseResult +fourthCaseResult + fifthCaseResult + sixthCaseResult) / 6).toFixed(2);

// const date = getCurremtDate();

// const result = `<p class="result"> Результат №1 = ${firstCaseResult} </p>
// <p class="result"> Результат №2 = ${secondCaseResult} </p>
// <p class="result"> Результат №3 = ${thirdCaseResult} </p>
// <p class="result"> Результат №4 = ${fourthCaseResult} </p>
// <p class="result"> Результат №5 = ${fifthCaseResult} </p>
// <p class="result"> Результат №6 = ${sixthCaseResult} </p>
// <b class="result"> Основний результат = ${MPS}</b>
// <div class="date">
//     <span class="time">${date.currentHours}:${date.currentMinutes}</span>
//      <spanclass="time">${date.currentDays} ${date.currentMonth} ${date.currentYear} року</span>
// </div>`;

// mainContainer.innerHTML = result;

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
