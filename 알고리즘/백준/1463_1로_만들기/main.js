const solution = (N) => {
  const dp = [0, 0];
  for (let i = 2; i <= N; i++) {
    const max = Number.MAX_SAFE_INTEGER;
    dp[i] = Math.min(dp[i / 3] ?? max, dp[i / 2] ?? max, dp[i - 1]) + 1;
  }
  return dp[N];
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = +fs.readFileSync(file).toString().trim();

console.log(solution(N));
