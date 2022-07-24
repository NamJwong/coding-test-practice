const solution = (T, P, N) => {
  const dp = new Array(N + 1).fill(0);
  let max = 0;
  for (let i = 0; i < N; i++) {
    max = Math.max(max, dp[i]);
    if (i + T[i] <= N) {
      dp[i + T[i]] = Math.max(max + P[i], dp[i + T[i]]);
    }
  }
  return Math.max(...dp);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = input;

const cases = numbers.map((s) => s.split(' ').map((s) => +s));
console.log(
  solution(
    cases.map((s) => s[0]),
    cases.map((s) => s[1]),
    +N
  )
);
