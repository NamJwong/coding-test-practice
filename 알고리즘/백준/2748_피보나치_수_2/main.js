const solution = (n) => {
  const dp = [BigInt(0), BigInt(1)];
  for (let i = 2; i <= n; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }
  return dp[n];
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const n = +fs.readFileSync(file).toString().trim();

console.log(solution(n).toString());
