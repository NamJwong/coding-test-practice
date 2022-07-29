const solution = (M, N, positions) => {
  let answer = 0;
  const map = Array.from(Array(M), () => Array(N).fill(0));
  for (const position of positions) {
    map[position[0]][position[1]] = 1;
  }
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array.from(Array(M), () => Array(N).fill(false));
  const visit = (x, y) => {
    if (map[x] === undefined || map[x][y] === undefined) return;
    if (map[x][y] === 1 && !visited[x][y]) {
      queue.push([x, y]);
      visited[x][y] = true;
    }
  };
  const bfs = (x, y) => {
    queue = [];
    queue.push([x, y]);
    visited[x][y] = true;
    while (queue.length > 0) {
      const temp = queue.shift();
      for (const move of moves) {
        visit(temp[0] + move[0], temp[1] + move[1]);
      }
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] && !visited[i][j]) {
        bfs(i, j);
        answer++;
      }
    }
  }

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [T, ...cases] = lines;

let M, N, K;
let positions = [];
for (c of cases) {
  if (!M) {
    const MNK = c.split(' ');
    M = +MNK[0];
    N = +MNK[1];
    K = +MNK[2];
  } else if (positions.length < K) {
    positions.push(c.split(' ').map((char) => +char));
    if (positions.length === K) {
      console.log(solution(M, N, positions));
      M = undefined;
      N = undefined;
      K = undefined;
      positions = [];
    }
  }
}
