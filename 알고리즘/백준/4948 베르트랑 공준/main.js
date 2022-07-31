const solution = (numbers) => {
  const N = Math.max(...numbers) * 2;
  const isPrimes = Array(N + 1).fill(true);
  isPrimes[0] = false;
  isPrimes[1] = false;
  for (let i = 2; i * i <= N; i += 1) {
    if (isPrimes[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrimes[j] = false;
      }
    }
  }
  for (const num of numbers) {
    const prime = isPrimes.slice(num + 1, num * 2 + 1);
    console.log(prime.filter((p) => p).length);
  }
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');

solution(inputs.map((n) => +n).slice(0, inputs.length - 1));
