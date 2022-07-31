const solution = (N, K) => {
  const queue = [];
  let queueIdx = 0;
  const visited = Array(Math.max(N, K) + 1).fill(false);
  queue.push([N, 0]);
  while (queue.length > queueIdx) {
    const pos = queue[queueIdx];
    if (pos[0] === K) {
      return pos[1];
    }
    if (visited[pos[0]]) {
      queueIdx++;
      continue;
    }
    queueIdx++;
    visited[pos[0]] = true;
    pos[0] > 0 && queue.push([pos[0] - 1, pos[1] + 1]);
    pos[0] < 100000 && N < K && queue.push([pos[0] + 1, pos[1] + 1]);
    pos[0] <= 50000 &&
      N < K &&
      pos[0] > 0 &&
      queue.push([pos[0] * 2, pos[1] + 1]);
  }
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map((c) => +c);

console.log(solution(N, M));
