const solution = (N, M, numbers) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, ...numbers] = lines;

console.log(
  solution(
    ...line.split(' ').map((c) => +c),
    numbers.map((s) => s.split(' ').map((c) => +c))
  )
);
