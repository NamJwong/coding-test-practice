const solution = (M, N) => {
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
  for (let i = M; i <= N; i++) {
    if (isPrimes[i]) console.log(i);
  }
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [M, N] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map((c) => +c);

solution(M, N);
