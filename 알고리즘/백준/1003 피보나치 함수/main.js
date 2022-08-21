const solution = (numbers) => {
  const dp = [
    [1, 0],
    [0, 1],
  ];
  const max = Math.max(...numbers);
  for (let i = 2; i <= max; i++) {
    dp[i] = [dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]];
  }
  numbers.forEach((num) => console.log(...dp[num]));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [T, ...numbers] = inputs;

solution(numbers.map(Number));
