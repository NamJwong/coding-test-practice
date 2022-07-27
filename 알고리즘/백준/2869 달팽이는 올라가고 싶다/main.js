const solution = (A, B, V) => {
  const h = A - B;
  for (let i = Math.floor((V - B) / h); ; i++) {
    if (i * h + B >= V) return i;
  }
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim();
const [A, B, V] = inputs.split(' ').map((c) => +c);

console.log(solution(A, B, V));
