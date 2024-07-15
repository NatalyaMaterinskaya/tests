function createButtonMarkup(arr) {
  const markup = arr.map(
    ({ answers }) => {
      let arrOfAnswer = [];
      answers.forEach((element) => {
          arrOfAnswer.push(element);
        });
     
       let markupOfAnswer = [];
      for (let i = 0; i < arrOfAnswer.length; i += 1) {
        markupOfAnswer.push(`<li class="btn-item">
        <button class="answer-btn" data-mark="${arrOfAnswer[i].mark}" type="button">${i+1}. ${arrOfAnswer[i].answer}</button>
        </li>`);
      }
      return markupOfAnswer.join("");
    })
  return markup;
}

export { createButtonMarkup};
