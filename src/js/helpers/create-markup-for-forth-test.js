function createMarkupForForthTest(arr,num=1) {
  const markup = arr.map(
    ({ id, question, firstAnswer, secondAnswer, thirdAnswer }) =>
      `<li class="test-item">
    <p class="test-item-text"> ${id}. ${question} </p>
    <div class="answer-wrapper">
      <p class="test-item-answer"> ${num}. ${firstAnswer} </p>
      <p class="test-item-answer"> ${(num + 1)}. ${secondAnswer} </p>
      <p class="test-item-answer"> ${(num + 2)}. ${thirdAnswer} </p>
    </div>
  </li>`
  );
  return markup;
}

export { createMarkupForForthTest };
