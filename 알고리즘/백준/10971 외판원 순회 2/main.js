const solution = (N, costs) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const dfs = (city, sum, path, start) => {
    if (sum > answer) return;
    if (path.length === N) {
      if (costs[city - 1][start - 1])
        answer = Math.min(sum + costs[city - 1][start - 1], answer);
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (!path.includes(i) && costs[city - 1][i - 1])
        dfs(i, sum + costs[city - 1][i - 1], [...path, i], start);
    }
  };
  for (let i = 1; i <= N; i++) {
    dfs(i, 0, [i], i);
  }
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

console.log(
  solution(
    +N,
    lines.map((line) => line.split(' ').map((c) => +c))
  )
);
