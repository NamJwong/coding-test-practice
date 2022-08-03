const solution = (numbers, ranges) => {
  const answer = [];
  const dp = [0, numbers[0]];
  for (let i = 1; i <= numbers.length; i++) {
    dp[i] = dp[i - 1] + numbers[i - 1];
  }
  for (let i = 0; i < ranges.length; i++) {
    answer[i] = dp[ranges[i][1]] - dp[ranges[i][0] - 1];
  }
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [info, numbers, ...cases] = inputs;

console.log(
  solution(
    numbers.split(' ').map((c) => +c),
    cases.map((nums) => nums.split(' ').map((c) => +c))
  )
);
