const solution = (N, edges) => {
  let answer = 0;
  const visited = Array(N + 1).fill(false);
  const graph = new Map();
  edges.forEach((edge) => {
    graph.get(edge[0])
      ? graph.get(edge[0]).push(edge[1])
      : graph.set(edge[0], [edge[1]]);
    graph.get(edge[1])
      ? graph.get(edge[1]).push(edge[0])
      : graph.set(edge[1], [edge[0]]);
  });

  const bfs = (start) => {
    const queue = [];
    visited[start] = true;
    queue.push(start);
    while (queue.length) {
      const temp1 = queue.shift();
      while (graph.get(temp1) && graph.get(temp1).length) {
        const temp2 = graph.get(temp1).pop();
        if (!visited[temp2]) {
          visited[temp2] = true;
          queue.push(temp2);
        }
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
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
    line.split(' ').map(Number)[0],
    numbers.map((s) => s.split(' ').map(Number))
  )
);
