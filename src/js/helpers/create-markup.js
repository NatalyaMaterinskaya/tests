function createMarkup(arr) {
  const markup = arr.map(
    ({ id, question }) =>
      `<li class="test-item">
    <p class="test-item-text"> ${id}. ${question} </p>
  </li>`
  );
  return markup;
}

export { createMarkup };