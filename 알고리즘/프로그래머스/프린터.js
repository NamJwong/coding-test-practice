function solution(priorities, location) {
  let order = 0;
  const queue = [];
  for (let i = 0; i < priorities.length; i++) {
    queue.push([i, priorities[i]]);
  }
  while (queue.length) {
    const front = queue.shift();
    if (queue.filter((q) => q[1] > front[1]).length) queue.push(front);
    else {
      order++;
      if (front[0] === location) return order;
    }
  }
}
