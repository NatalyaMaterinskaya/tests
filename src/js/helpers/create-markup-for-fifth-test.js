function createButtonMarkupForFifthTest(arr1, arr2) { 
  const markupBody = arr.map(
      ({ question }) => {
          for (let i = 0; i <= 30; i += 1) {
              `    <tr>
      <td>${i + 1}</td>
      <td>${arr1[i]}</td>
      <th>3</th>
      <th>2</th>
      <th>1</th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
      <td>${arr2[i]}</td>
    </tr>`;
          }
      }
  );
  return markupBody;
}

const markupHeader =`<table class="transaction-history">
  <thead>
    <tr>
      <th>№ п/п</th>
      <th>Характеристики</th>
      <th>Шкала індексів</th>
      <th>Характеристики</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>`;

console.log(markupHeader);
export { markupHeader };

