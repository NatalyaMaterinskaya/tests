function createMarkupForFifthTest(arr) {
  const markup = arr.map(
    ({ question, state }) =>
      `<ul class="button-list">
      <li class="button-item">
        <button class="btn" type="button" data-state=${!state}>3</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${!state}>2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${!state}>1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${state}>0</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${state}>1</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${state}>2</button>
      </li>
      <li class="button-item">
        <button class="btn" type="button" data-state=${state}>3</button>
      </li>
    </ul>
      <li class="test-item">
    <p class="test-item-text"> ${question} </p>
  </li>`
  );
  return markup;
}

export { createMarkupForFifthTest };
