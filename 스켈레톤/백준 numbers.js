const solution = (numbers) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = input;

console.log(solution(numbers.map((n) => +n)));
