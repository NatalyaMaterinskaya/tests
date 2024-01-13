const btnTextArr = [
  "Це твердження мені зовсім НЕ підходить",
  "Це твердження мені НЕ ЗОВСІМ підходить",
  "Це твердження мені ПІДХОДИТЬ",
];

function createButtonMarkup() {
  let markup = [];
  for (let i = 0; i <= 2; i += 1) {
    markup.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${i}" type="button">${btnTextArr[i]}</button>
        </li>`);
  }
  return markup;
}

export { createButtonMarkup };
