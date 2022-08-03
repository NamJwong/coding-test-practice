const solution = (N, numbers) => {
  const answer = [];
  answer.push(Math.round(numbers.reduce((acc, curr) => acc + curr, 0) / N));
  numbers.sort((a, b) => a - b);
  answer.push(numbers[Math.floor(N / 2)]);
  const map = new Map();
  numbers.forEach((num) => map.set(num, map.get(num) + 1 || 1));
  const mapArr = Array.from(map);
  mapArr.sort((a, b) => b[1] - a[1]);
  const modes = mapArr
    .filter((val) => val[1] === mapArr[0][1])
    .map((val) => val[0]);
  answer.push(modes.length > 1 ? modes.sort((a, b) => a - b)[1] : modes[0]);
  answer.push(numbers[N - 1] - numbers[0]);
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

console.log(
  solution(
    +N,
    numbers.map((n) => +n)
  )
);
