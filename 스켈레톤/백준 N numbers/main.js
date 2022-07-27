const solution = (numbers) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers] = inputs;

console.log(solution(numbers.split(' ').map((n) => +n)));
