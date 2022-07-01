function solution(rows, columns, queries) {
  var answer = [];
  const matrix = Array.from(Array(rows + 1), () => Array(columns + 1).fill(0));
  for (let i = 1, n = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++, n++) {
      matrix[i][j] = n;
    }
  }

  for (const query of queries) {
    let min = Number.MAX_VALUE;
    let x1, y1, x2, y2;
    if (query[0] < query[2]) {
      (x1 = query[0]), (y1 = query[1]), (x2 = query[2]), (y2 = query[3]);
    } else {
      (x1 = query[2]), (y1 = query[3]), (x2 = query[0]), (y2 = query[1]);
    }
    let queue = [matrix[x1 + 1][y1]];
    for (let i = y1; i < y2; i++) {
      min = Math.min(min, queue[0]);
      queue.push(matrix[x1][i]);
      matrix[x1][i] = queue.shift();
    }
    for (let i = x1; i < x2; i++) {
      min = Math.min(min, queue[0]);
      queue.push(matrix[i][y2]);
      matrix[i][y2] = queue.shift();
    }
    for (let i = y2; i > y1; i--) {
      min = Math.min(min, queue[0]);
      queue.push(matrix[x2][i]);
      matrix[x2][i] = queue.shift();
    }
    for (let i = x2; i > x1; i--) {
      min = Math.min(min, queue[0]);
      queue.push(matrix[i][y1]);
      matrix[i][y1] = queue.shift();
    }
    answer.push(min);
  }
  return answer;
}
