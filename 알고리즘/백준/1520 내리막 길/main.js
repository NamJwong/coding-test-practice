const solution = (N, M, map) => {
  let cnt = 0;
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let visited = Array.from(Array(N), () => Array(M).fill(false));
  const initVisited = () => {
    visited = Array.from(Array(N), () => Array(M).fill(false));
  };
  const dfs = (x, y) => {
    if (x === N - 1 && y === M - 1) {
      initVisited();
      return ++cnt;
    }
    visited[x][y] = true;
    let isEnd = true;
    for (let i = 0; i < 4; i++) {
      const xToMove = x + moves[i][0];
      const yToMove = y + moves[i][1];
      if (
        map[xToMove] &&
        map[xToMove][yToMove] &&
        map[xToMove][yToMove] < map[x][y] &&
        !visited[xToMove][yToMove]
      ) {
        isEnd = false;
        dfs(xToMove, yToMove, map[x][y]);
      }
    }
    if (isEnd) initVisited();
  };
  dfs(0, 0);
  return cnt;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [size, ...numbers] = input;

console.log(
  solution(
    ...size.split(' ').map((c) => +c),
    numbers.map((s) => s.split(' ').map((c) => +c))
  )
);
