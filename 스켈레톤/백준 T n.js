const solution = (n) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [T, ...numbers] = input;

for (const n of numbers) {
  console.log(solution(n));
}
