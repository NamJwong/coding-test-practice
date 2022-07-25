function solution(arr1, arr2) {
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  const col2 = arr2[0].length;
  const answer = [];
  for (let i = 0; i < row1; i++) {
    answer.push(new Array());
    for (let j = 0; j < col2; j++) {
      answer[i].push(new Array());
    }
  }

  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col2; j++) {
      for (let k = 0; k < col1; k++) {
        answer[i][j].push(arr1[i][k]);
      }
      for (let k = 0; k < col1; k++) {
        answer[i][j][k] *= arr2[k][j];
      }
      answer[i][j] = answer[i][j].reduce((sum, curr) => sum + curr, 0);
    }
  }
  return answer;
}
