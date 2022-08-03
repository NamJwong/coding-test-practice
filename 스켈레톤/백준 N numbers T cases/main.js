const solution = (numbers, cases) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers, T, ...cases] = inputs;

console.log(
  solution(
    numbers.split(' ').map((c) => +c),
    cases.map((nums) => nums.split(' ').map((c) => +c))
  )
);
