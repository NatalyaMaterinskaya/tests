//questions
const testItems = [
  {
    question: "Зазвичай вранці я прокидаюся свіжим і відпочилим.",
  },
  {
    question: "Запори у мене бувають дуже рідко.",
  },
  {
    question:
      "Часом у мене бувають приступи сміху або плачу, з якими я ніяк не можу впоратися.",
  },
  {
    question: "Мені здається, що мене ніхто не розуміє.",
  },
  {
    question:
      "Буває, у мене з’являється бажання ламати або крушити все навколо.",
  },
  {
    question:
      "Бувало, що я цілими днями або навіть тижнями нічого не міг робити, тому що ніяк не міг примусити себе взятися до роботи.",
  },
  {
    question: "Голова у мене болить часто.",
  },
  {
    question: "Було б добре, якби майже всі закони відмінили.",
  },
  {
    question:
      "Стан мого здоров'я майже такий же, як у більшості моїх знайомих (не гірше).",
  },
  {
    question:
      "Зустрічаючи на вулиці своїх знайомих або шкільних друзів, з якими я давно не бачився, я вважаю за краще проходити мимо, якщо вони зі мною не заговорюють першими.",
  },
  {
    question: "Я людина товариська.",
  },
  {
    question: "Значну частину часу настрій у мене пригнічений.",
  },
  {
    question:
      "Тепер мені важко сподіватися на те, що я чого-небудь доб'юся у житті.",
  },
  {
    question: "У мене мало впевненості в собі.",
  },
  {
    question:
      "Я вважаю, що більшість людей здатна збрехати, щоб просунутися по службі.",
  },
  {
    question: "Я сварюся з членами моєї родини дуже рідко.",
  },
  {
    question:
      "Іноді я маю сильне бажання порушити правила пристойності або нашкодити.",
  },
  {
    question: "Я досить байдужий до того, що зі мною буде.",
  },
  {
    question:
      "Деякі люди до того полюбляють командувати, що мене так і тягне робити все наперекір, навіть якщо я знаю, що вони мають рацію.",
  },
  {
    question:
      "Я часто вважаю себе зобов'язаним відстоювати те, що вважаю справедливим.",
  },
  {
    question:
      "Моя мова зараз така ж, як завжди (ні швидше і ні повільніше, немає ні хрипоти, ні невиразності).",
  },
  {
    question: "Мене дуже зачіпає, коли мене критикують або лають.",
  },
  {
    question:
      "Іноді у мене буває таке відчуття, що я просто повинен нанести ушкодження собі або кому-небудь іншому.",
  },
  {
    question: "Іноді мене так і підмиває з ким-небудь затіяти бійку.",
  },
  {
    question: "Останні декілька років я відчуваю себе добре.",
  },
  {
    question: "Зараз моя вага постійна (я не худну і не повнію).",
  },
  {
    question: "Я легко можу заплакати.",
  },
  {
    question:
      "Я був би досить спокійний, якби у кого-небудь з моєї сім'ї були неприємності через порушення закону.",
  },
  {
    question: "З моїм розумом твориться щось недобре.",
  },
  {
    question:
      "Приступи запаморочення у мене бувають дуже рідко (або майже не бувають).",
  },
  {
    question:
      "Коли я намагаюся щось зробити, то часто помічаю, що у мене тремтять руки.",
  },
  {
    question: "Велику частину часу я відчуваю загальну слабкість.",
  },
  {
    question: "Іноді, коли я збентежений, я сильно потію, і мене це дратує.",
  },
  {
    question: "Думаю, що я людина приречена.",
  },
  {
    question:
      "Бували випадки, коли мені було важко утриматися від того, щоб що-небудь не поцупити у кого-небудь або де-небудь, наприклад, в магазині.",
  },
  {
    question: "Я зловживав спиртними напоями.",
  },
  {
    question: "Я часто турбуюся про що-небудь.",
  },
  {
    question: "Я рідко задихаюся, і у мене не буває сильного серцебиття.",
  },
  {
    question:
      "Мої батьки і інші члени моєї сім'ї прискіпуються до мене більше, ніж треба.",
  },
  {
    question: "Хтось управляє моїми думками.",
  },
  {
    question: "У школі я засвоював матеріал повільніше, ніж інші.",
  },
  {
    question: "Я цілком упевнений в собі.",
  },
  {
    question:
      "Коли я знаходжуся в компанії, мені важко знайти відповідну тему для розмови.",
  },
  {
    question:
      "Мені легко примусити інших людей боятися мене, і іноді я це роблю заради забави.",
  },
  {
    question:
      "Безглуздо засуджувати людину, що обдурила того, хто сам дозволяє себе обдурювати.",
  },
  {
    question: "Щасливіше всього я буваю, коли знаходжуся на самоті.",
  },
  {
    question:
      "Іноді без жодної причини у мене раптом наступають періоди надзвичайної веселості.",
  },
  {
    question: "Життя для мене майже завжди пов'язано з напругою.",
  },
  {
    question: "В школі мені було дуже важко виступати перед класом.",
  },
  {
    question:
      "Мені здається, що я знаходжу друзів з такою ж легкістю, як і інші.",
  },
  {
    question: "Мені неприємно, коли навкруги мене є люди.",
  },
  {
    question: "Мене легко заставити зніяковіти.",
  },
  {
    question:
      "Мені важко приступити до виконання нового завдання або почати нову справу.",
  },
  {
    question:
      "Якби люди не були налаштовані проти мене, я досяг би набагато більшого.",
  },
  {
    question: "Мені здається, що мене ніхто не розуміє.",
  },
  {
    question: "Я легко втрачаю терпіння у спілкуванні з людьми.",
  },
  {
    question: "Часто мені хочеться померти.",
  },
  {
    question:
      "Бувало, що я кидав почату справу, оскільки боявся, що я не справлюся з нею.",
  },
  {
    question: "Майже щодня трапляється що-небудь, що лякає мене.",
  },
  {
    question: "Навіть серед людей я зазвичай відчуваю себе самотнім.",
  },
  {
    question:
      "Часто, навіть тоді, коли для мене все складається добре, я відчуваю, що мені все байдуже.",
  },
  {
    question:
      "Зазвичай я спокійний, і мене нелегко вивести з душевної рівноваги.",
  },
  {
    question: "Часом мені здається, що я ні на що не здатний.",
  },
  {
    question: "Мене дуже турбують всілякі нещастя.",
  },
  {
    question:
      "Я думаю, що можна, не порушуючи закон, спробувати знайти в ньому лазівку.",
  },
  {
    question:
      "Є люди, які мені настільки неприємні, що я в глибині душі радію, коли вони одержують прочухан за що-небудь.",
  },
  {
    question: "Я охоче знайомлюся з новими людьми.",
  },
  {
    question:
      "Я вважаю за краще діяти згідно власним планам, а не слідувати вказівкам інших.",
  },
  {
    question: "Люблю, щоб оточуючі знали мою точку зору.",
  },
  {
    question: "Я людина нервова і легко збудлива.",
  },
  {
    question: "Все у мене виходить погано, не так як треба.",
  },
  {
    question: "Майбутнє здається мені безнадійним.",
  },
  {
    question:
      "Люди досить легко можуть змінити мою думку, навіть якщо до цього воно здавалася мені остаточною.",
  },
  {
    question: "Значну частину часу я відчуваю себе втомленим.",
  },
  {
    question: "Я прагну ухилятися від конфліктів і скрутних положень.",
  },
  {
    question:
      "Пригодницькі оповідання мені подобаються більше, аніж про любов.",
  },
  {
    question:
      "Безглуздо засуджувати людей, які прагнуть отримати від життя все, що зможуть.",
  },
];
//questions

for (let i = 1; i <= testItems.length; i += 1) {
  testItems[i - 1].id = i;
}

const formEl = document.querySelector(".feedback-form");
const mainContainer = document.querySelector(".container");
const testsEl = document.querySelector(".tests");
const btnEl = document.querySelector(".answer-container");

const markup = testItems.map(
  ({ id, question }) =>
    `<li class="test-item">
    <p class="test-item-text"> ${id}. ${question} </p>
  </li>`
);
const monthArr = ["січня", "лтого", "березня", "квітня",  "травня", "червня","липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

let firstCaseCounter = 0;
let secondCaseCounter = 0;
let thirdCaseCounter = 0;
let i = 70;
let userName = null;

const firstCaseYes = [
  4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24, 27, 28, 29,
  31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 68, 69, 70, 71, 72,
  73, 74, 76, 77,
];
const firstCaseNo = [1, 2, 3, 11, 16, 21, 25, 26, 30, 38, 42, 62, 67, 75];

const secondCaseYes = [
  6, 7, 12, 13, 14, 18, 27, 31, 32, 33, 34, 37, 41, 43, 46, 48, 49, 51, 52, 53,
  55, 57, 58, 59, 60, 61, 63, 64, 71, 72, 73, 74,
];
const secondCaseNo = [1, 2, 9, 11, 21, 25, 26, 30, 38, 42, 67];

const thirdCaseYes = [
  3, 4, 5, 8, 10, 15, 17, 19, 20, 22, 23, 24, 28, 29, 35, 36, 39, 40, 44, 45,
  47, 50, 54, 56, 65, 66, 68, 69, 70, 76, 77,
];
const thirdCaseNo = [16, 62, 75];

alert(
  "Інструкція: „Зараз Вам буде запропоновано відповісти тільки „Так” (+) або „Ні”  (-) на ряд питань. Питання стосуються безпосередньо Вашого самопочуття, поведінки або характеру. „Правильних” або „неправильних” відповідей тут бути не може, тому не намагайтеся довго їх обдумувати або радитися з товаришами – давайте відповідь виходячи з того, що більше відповідає Вашому стану або уявленню про самого себе. "
);

const clickItem = (evt) => {
  const { target } = evt;
  if (!target.classList.contains("answer-btn")) {
    return;
  }
  if (evt.target.dataset.answer === "yes") {
    if (firstCaseYes.includes(i)) {
      firstCaseCounter += 1;
    }
    if (secondCaseYes.includes(i)) {
      secondCaseCounter += 1;
    }
    if (thirdCaseYes.includes(i)) {
      thirdCaseCounter += 1;
    }
  }
  if (evt.target.dataset.answer === "no") {
    if (firstCaseNo.includes(i)) {
      firstCaseCounter += 1;
    }
    if (secondCaseNo.includes(i)) {
      secondCaseCounter += 1;
    }
    if (thirdCaseNo.includes(i)) {
      thirdCaseCounter += 1;
    }
  }
  if (i < markup.length) {
    testsEl.innerHTML = markup[i];
    i += 1;
  } else {
    const userDataFromStorage = localStorage.getItem("feedback-form-state");
    const parsedUserDataFromStorage = JSON.parse(userDataFromStorage);
    
    const currentDate = new Date();
    const currentHours = currentDate.getHours().toString().padStart(2, "0");
    const currentMinutes = currentDate.getMinutes().toString().padStart(2, "0");
    const currentDays = currentDate.getDate().toString().padStart(2, "0");
    const currentMonth = monthArr.find((_,index) => index === currentDate.getMonth());
     const currentYear = currentDate.getFullYear();

    const result = `<p class="user"> Тест пройшов/пройшла</p>
    <p class="user">${parsedUserDataFromStorage}</p>
    <p class="result"> Результат №1 = ${firstCaseCounter} </p>
    <p class="result"> Результат №2 = ${secondCaseCounter} </p>
    <p class="result"> Результат №3 = ${thirdCaseCounter} </p>
    <div class="date">
        <span class="time">${currentHours}:${currentMinutes}</span>
         <spanclass="time">${currentDays} ${currentMonth} ${currentYear} року</span>
    </div>`;

    mainContainer.innerHTML = result;
  }
};

const handleInput = (event) => {
  userName = event.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(userName));
};

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { name },
  } = event.currentTarget;

  console.log(name);
  if (name.value.trim() === "") {
    alert("Введіть прізвище, ім'я, по батькові, будь ласка.");
  } else {
    console.log(userName);
    userName = null;
    event.currentTarget.reset();
    formEl.style.display = "none";
    testsEl.innerHTML = markup[i - 1];
    btnEl.style.display = "flex";
  }
};

btnEl.addEventListener("click", clickItem);
formEl.addEventListener("input", handleInput);
formEl.addEventListener("submit", handleSubmit);