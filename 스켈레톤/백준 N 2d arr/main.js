const solution = (N, map) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...lines] = inputs;

console.log(
  solution(
    +N,
    lines.map((line) => line.split(' ').map((c) => +c)) // split 기준 주의 (0000 형태인지, 0 0 0 0 형태인지)
  )
);
