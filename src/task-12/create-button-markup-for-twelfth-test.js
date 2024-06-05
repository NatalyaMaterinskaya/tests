const btnTextArr = ["Ніколи", "Іноді", "Найчастіше так", "Майже завжди"];

function createButtonMarkup() {
  let markup = [];
  for (let i = 0; i <= 3; i += 1) {
    markup.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${i}" type="button">${btnTextArr[i]}</button>
        </li>`);
  }
  return markup;
}

export { createButtonMarkup };
