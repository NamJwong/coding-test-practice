const solution = (numbers) => {
  const set = new Set(numbers);
  const order = [...set].sort((a, b) => a - b);
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }
  return numbers.map((n) => map.get(n)).join(' ');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers] = inputs;

console.log(solution(numbers.split(' ').map((n) => +n)));
