const solution = (N, pairs) => {
  let answer = 0;

  const map = new Map();
  pairs.forEach((pair) => {
    map.get(pair[0])
      ? map.get(pair[0]).push(pair[1])
      : map.set(pair[0], [pair[1]]);
    map.get(pair[1])
      ? map.get(pair[1]).push(pair[0])
      : map.set(pair[1], [pair[0]]);
  });
  const visited = Array(N + 1).fill(false);

  const queue = [];
  visited[1] = true;
  queue.push(1);

  while (queue.length) {
    const temp1 = queue.shift();
    while (map.get(temp1).length) {
      const temp2 = map.get(temp1).pop();
      if (!visited[temp2]) {
        visited[temp2] = true;
        queue.push(temp2);
        answer++;
      }
    }
  }

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const [N, M, ...numbers] = lines;

console.log(
  solution(
    +N,
    numbers.map((s) => s.split(' ').map((c) => +c))
  )
);
