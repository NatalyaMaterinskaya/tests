function createMarkupForSixthTest(arr) {
  const markup = arr.map(
    ({ id, question, state }) =>
    `<li class="test-item">
      <p class="test-item-text">${id}. ${question} </p>
    </li>
    <ul class="button-list">
      <li class="button-item">
        <button class="btn" type="button" data-value=4 data-state=${state}>1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-value=3 data-state=${state}>2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button"data-value=2 data-state=${state}>3</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button"data-value=1 data-state=${state}>4</button>
      </li>
    </ul>`
  );
  return markup;
}

export { createMarkupForSixthTest };
