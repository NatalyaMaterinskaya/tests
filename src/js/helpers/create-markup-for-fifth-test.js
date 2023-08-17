function createButtonMarkupForFifthTest(arr) {
  const markup = arr.map(
    ({ question, state }) =>
      `<ul class="button-list">
      <li class="button-item" data-state="${state}">
        <button class="btn" type="button" data-side="left">3</button>
      </li>
      <li class="button-item" data-state="${state}">
        <button class="btn" type="button" data-side="left">2</button>
      </li>
      <li class="button-item" data-state="${state}">
        <button class="btn" type="button" data-side="left">1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button">0</button>
      </li>
      <li class="button-item" data-state="${state}">
        <button class="btn" type="button" data-side="right">1</button>
      </li>
      <li class="button-item" data-state="${state}">
        <button class="btn" type="button" data-side="right">2</button>
      </li>
      <li class="button-item" data-state="${state}">
        <button class="btn" type="button" data-side="right">3</button>
      </li>
    </ul>
      <li class="test-item">
    <p class="test-item-text"> ${question} </p>
  </li>`
  );
  return markup;
}

export { createButtonMarkupForFifthTest };
