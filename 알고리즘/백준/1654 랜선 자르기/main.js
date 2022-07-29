const solution = (N, lines) => {
  let start = 0;
  let end = Math.max(...lines);
  let middle = Math.floor((start + end) / 2);
  let answer = middle;

  // 답이 end일 수도 있기 때문에 <가 아님
  while (start <= end) {
    let num = 0;
    for (let line of lines) {
      num += Math.floor(line / middle);
    }
    if (num >= N) {
      start = middle + 1;
      answer = middle;
      middle = Math.floor((start + end) / 2);
    } else {
      end = middle - 1;
      middle = start + Math.floor((end - start) / 2);
    }
  }
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [line, ...numbers] = lines;

console.log(
  solution(
    +line.split(' ')[1],
    numbers.map((s) => s.split(' ').map((c) => +c))
  )
);
