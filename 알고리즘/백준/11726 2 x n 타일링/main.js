const solution = (n) => {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }
  return dp[n];
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = +fs.readFileSync(file).toString().trim();

console.log(solution(n));
