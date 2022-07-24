const solution = (N, M, numbers) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [size, ...numbers] = input;

console.log(
  solution(
    ...size.split(' ').map((c) => +c),
    numbers.map((s) => s.split(' ').map((c) => +c))
  )
);
