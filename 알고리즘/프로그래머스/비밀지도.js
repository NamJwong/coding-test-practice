function solution(n, arr1, arr2) {
  const answer = [];
  const binaryArr1 = arr1.map((x) => x.toString(2).padStart(n, '0'));
  const binaryArr2 = arr2.map((x) => x.toString(2).padStart(n, '0'));
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      const sum = Number(binaryArr1[i][j]) + Number(binaryArr2[i][j]);
      row += sum > 0 ? '#' : ' ';
    }
    answer.push(row);
  }
  return answer;
}
