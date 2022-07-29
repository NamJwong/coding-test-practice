const solution = (M, N, K, positions) => {};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [T, ...cases] = lines;

let M, N, K;
let positions = [];
for (c of cases) {
  if (!M) {
    const MNK = c.split(' ');
    M = +MNK[0];
    N = +MNK[1];
    K = +MNK[2];
  } else if (positions.length < K) {
    positions.push(c.split(' ').map((char) => +char));
    if (positions.length === K) {
      console.log(M, N, K, positions);
      M = undefined;
      N = undefined;
      K = undefined;
      positions = [];
    }
  }
}
