const solution = (numbers) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

console.log(solution(inputs.map((n) => +n).slice(0, inputs.length - 1)));
