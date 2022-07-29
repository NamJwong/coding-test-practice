const solution = (N, map) => {
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array.from(Array(N), () => Array(N).fill(false));
  let total = 0;
  let nums = [];
  let num;
  const visit = (x, y) => {
    if (map[x] === undefined || map[x][y] === undefined) return;
    if (map[x][y] === 1 && !visited[x][y]) {
      queue.push([x, y]);
      visited[x][y] = true;
      num++;
    }
  };
  const bfs = (x, y) => {
    queue = [];
    queue.push([x, y]);
    visited[x][y] = true;
    num = 1;
    while (queue.length > 0) {
      const temp = queue.shift();
      for (const move of moves) {
        visit(temp[0] + move[0], temp[1] + move[1]);
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] && !visited[i][j]) {
        total++;
        bfs(i, j);
        nums.push(num);
      }
    }
  }

  console.log(total);
  nums.sort((a, b) => a - b).forEach((num) => console.log(num));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

solution(
  +N,
  lines.map((line) => line.split('').map((c) => +c))
);
