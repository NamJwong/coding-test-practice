const solution = (N) => {
  const moves = [];
  const hanoi = (num, from, to, other) => {
    if (num === 1) return moves.push(`${from} ${to}`);
    hanoi(num - 1, from, other, to);
    moves.push(`${from} ${to}`);
    hanoi(num - 1, other, to, from);
  };
  console.log(2 ** N - 1);
  hanoi(N, 1, 3, 2);
  console.log(moves.join('\n'));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = +fs.readFileSync(file).toString().trim();

solution(N);
