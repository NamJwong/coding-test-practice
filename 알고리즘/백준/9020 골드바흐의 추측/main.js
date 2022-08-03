const solution = (numbers) => {
  const answer = [];
  const isPrimes = Array(10001).fill(true);
  isPrimes[0] = false;
  isPrimes[1] = false;
  for (let i = 2; i * i <= 10000; i += 1) {
    if (isPrimes[i]) {
      for (let j = i * i; j <= 10000; j += i) {
        isPrimes[j] = false;
      }
    }
  }
  for (const target of numbers) {
    let n1 = target / 2;
    let n2 = target / 2;
    while (true) {
      if (isPrimes[n1] && isPrimes[n2] && n1 + n2 === target) {
        answer.push(`${n1} ${n2}`);
        break;
      } else {
        n1--;
        n2++;
      }
    }
  }
  return answer.join('\n');
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

console.log(solution(inputs.map((n) => +n).slice(1)));
