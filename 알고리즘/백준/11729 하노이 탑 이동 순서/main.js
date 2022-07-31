const solution = (N) => {
  const hanoi = (num, from, to, other) => {
    if (num === 1) return console.log(from, to);
    hanoi(num - 1, from, other, to);
    console.log(from, to);
    hanoi(num - 1, other, to, from);
  };
  console.log(2 ** N - 1);
  hanoi(N, 1, 3, 2);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = +fs.readFileSync(file).toString().trim();

solution(N);
