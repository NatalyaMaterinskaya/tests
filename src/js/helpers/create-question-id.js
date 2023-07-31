function createQuestionId(arr) {
  for (let i = 1; i <= arr.length; i += 1) {
    arr[i - 1].id = i;
  }
}

export { createQuestionId };
