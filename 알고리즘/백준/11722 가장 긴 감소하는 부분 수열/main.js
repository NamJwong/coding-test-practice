const solution = (numbers) => {
  const dp = [1];
  for (let i = 1; i < numbers.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers] = input;

console.log(solution(numbers.split(' ').map((n) => +n)));
