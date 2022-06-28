function solution(maps) {
  let answer;
  const visited = Array.from(Array(maps.length), () =>
    Array(maps[0].length).fill(false)
  );
  let queue = [];
  const visit = (x, y, dist) => {
    if (maps[x] === undefined || maps[x][y] === undefined) return;
    if (maps[x][y] === 1 && !visited[x][y]) {
      queue.push({ x: x, y: y, dist: dist + 1 });
      visited[x][y] = true;
    }
  };
  const bfs = (x, y) => {
    queue.push({ x: x, y: y, dist: 1 });
    visited[x][y] = true;
    while (queue.length > 0) {
      const temp = queue.shift();
      if (temp.x === maps.length - 1 && temp.y === maps[0].length - 1) {
        answer = temp.dist;
        break;
      }
      visit(temp.x + 1, temp.y, temp.dist);
      visit(temp.x - 1, temp.y, temp.dist);
      visit(temp.x, temp.y + 1, temp.dist);
      visit(temp.x, temp.y - 1, temp.dist);
    }
  };
  bfs(0, 0);
  return answer || -1;
}
