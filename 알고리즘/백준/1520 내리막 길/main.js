const solution = (N, M, map) => {
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let dp = Array.from(Array(N), () => Array(M).fill(null));
  const dfs = (x, y) => {
    if (x === N - 1 && y === M - 1) return 1;
    if (dp[x][y] === null) {
      dp[x][y] = 0;
      for (let i = 0; i < 4; i++) {
        const nextX = x + moves[i][0];
        const nextY = y + moves[i][1];
        if (map[nextX] && map[nextX][nextY] && map[x][y] > map[nextX][nextY]) {
          dp[x][y] += dfs(nextX, nextY);
        }
      }
    }
    return dp[x][y];
  };
  return dfs(0, 0);
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
