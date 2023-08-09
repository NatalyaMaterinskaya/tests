function createButtonMarkupForForthTest(arr) {
  const markup = arr.map(
    ({ firstAnswer, secondAnswer, thirdAnswer }) => {
      const arrOfAnswer = [firstAnswer, secondAnswer, thirdAnswer];
       let markupOfAnswer = [];
      for (let i = 1; i <= 3; i += 1) {
       markupOfAnswer.push(`<li class="btn-item">
        <button class="answer-btn" data-answer="${i}" type="button">${i}. ${
         arrOfAnswer[i - 1]
       }</button>
        </li>`);
      }
      return markupOfAnswer.join("");
    })
  return markup;
}

export { createButtonMarkupForForthTest };
