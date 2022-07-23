const solution = (stairs) => {
  const dp = [];
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];
  for (let i = 3; i < stairs.length; i++) {
    dp[i] = Math.max(
      dp[i - 3] + stairs[i - 1] + stairs[i],
      dp[i - 2] + stairs[i]
    );
  }
  return dp[stairs.length - 1];
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = input;

console.log(solution(numbers.map((n) => +n)));
