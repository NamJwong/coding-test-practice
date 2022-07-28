const solution = (N) => {
  if (N % 5 === 0) return N / 5;
  let five = Math.floor(N / 5);
  while (five > -1) {
    if ((N - five * 5) % 3 === 0) return five + (N - five * 5) / 3;
    five--;
  }
  return five;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = +fs.readFileSync(file).toString().trim();

console.log(solution(N));
