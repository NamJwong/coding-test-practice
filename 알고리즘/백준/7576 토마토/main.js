const solution = (M, N, box) => {
  let answer = 0;

  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [];
  let queueIdx = 0;
  const visit = (x, y, day) => {
    if (box[x] === undefined || box[x][y] === undefined) return;
    if (box[x][y] === 0) {
      queue.push({ x: x, y: y, day: day + 1 });
      box[x][y] = 1;
      answer = day + 1;
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 1) queue.push({ x: i, y: j, day: 0 });
    }
  }

  while (queue.length > queueIdx) {
    for (const move of moves) {
      visit(
        queue[queueIdx].x + move[0],
        queue[queueIdx].y + move[1],
        queue[queueIdx].day
      );
    }
    queueIdx++;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (box[i][j] === 0) return -1;
    }
  }

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [MN, ...lines] = inputs;

console.log(
  solution(
    ...MN.split(' ').map((c) => +c),
    lines.map((line) => line.split(' ').map((c) => +c))
  )
);
