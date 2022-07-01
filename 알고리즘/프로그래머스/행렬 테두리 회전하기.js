function solution(rows, columns, queries) {
  var answer = [];
  const matrix = Array.from(Array(rows + 1), () => Array(columns + 1).fill(0));
  for (let i = 1, n = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++, n++) {
      matrix[i][j] = n;
    }
  }

  // if(rows===6 || rows===3)console.log(matrix);

  for (const query of queries) {
    let min = 101;
    const x1 = query[0],
      y1 = query[1],
      x2 = query[2],
      y2 = query[3];
    let queue = [matrix[x1 + 1][y1]];
    for (let i = y1; i < y2; i++) {
      min = Math.min(min, queue[0]);
      queue.push(matrix[x1][i]);
      matrix[x1][i] = queue.shift();
      // if(rows===3 && x1===1 && y1===1) console.log(tmp);
    }
    // if(rows===3)console.log('상오왼', matrix);
    for (let i = x1; i < x2; i++) {
      min = Math.min(min, queue[0]);
      queue.push(matrix[i][y2]);
      matrix[i][y2] = queue.shift();
    }
    // if(rows===3)console.log('오상하', matrix);
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
  // if(rows===6 || rows===3)console.log(matrix);
  return answer;
}
