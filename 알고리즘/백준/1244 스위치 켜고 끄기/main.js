const solution = (N, switches, students) => {
  switches.unshift(null);
  for (let i = 0; i < students.length; i++) {
    if (students[i][0] === 1) {
      let num = 1;
      while (students[i][1] * num <= N) {
        switches[students[i][1] * num] = switches[students[i][1] * num] ? 0 : 1;
        num++;
      }
    } else {
      let n = 1;
      switches[students[i][1]] = switches[students[i][1]] ? 0 : 1;
      while (switches[students[i][1] - n] === switches[students[i][1] + n]) {
        switches[students[i][1] - n] = switches[students[i][1] - n] ? 0 : 1;
        switches[students[i][1] + n] = switches[students[i][1] + n] ? 0 : 1;
        n++;
      }
    }
  }
  let answer = '';
  for (let i = 1; i <= N; i++) {
    answer = answer + switches[i] + (i % 20 === 0 ? '\n' : ' ');
  }
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers, T, ...cases] = inputs;

console.log(
  solution(
    +N,
    numbers.split(' ').map((c) => +c),
    cases.map((nums) => nums.split(' ').map((c) => +c))
  )
);
