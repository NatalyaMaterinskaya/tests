function createMarkupForTenthTest(arr) {
  const markup = arr.map(
    ({ id, question }) =>
      `<p class="test-item-text">${id}. ${question} </p>
      <ul class="button-list">
      <li class="button-item">
        <button class="btn" type="button">0</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">3</button>
      </li>
            <li class="button-item">
        <button class="btn" type="button">4</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">5</button>
      </li>
    </ul>`
  );
  return markup;
}

export { createMarkupForTenthTest };
