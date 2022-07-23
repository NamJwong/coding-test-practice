const solution = (n) => {
  const dp = [0, 1, 2, 4];
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [_, ...numbers] = input;

for (const n of numbers) {
  console.log(solution(n));
}
