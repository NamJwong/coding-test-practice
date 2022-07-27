const solution = (numbers) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return numbers.reduce((answer, num) => (isPrime(num) ? ++answer : answer), 0);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, numbers] = inputs;

console.log(solution(numbers.split(' ').map((n) => +n)));
