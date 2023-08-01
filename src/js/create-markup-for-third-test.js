function createMarkupForThirdTest(arr) {
  const markup = arr.map(
    ({ id, num, question }) =>
      `<li class="test-item" data-id=${id} data-num=${num}>
    <p class="test-item-text">${id}.${num}. ${question} </p>
  </li>`
  );
  return markup;
}

export { createMarkupForThirdTest };
