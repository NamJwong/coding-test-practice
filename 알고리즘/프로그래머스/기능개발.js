function solution(progresses, speeds) {
  const answer = [];
  const queue = progresses.map((p, i) => ({ progress: p, speed: speeds[i] }));
  while (queue.length) {
    for (const func of queue) {
      func.progress += func.speed;
    }
    let cnt = 0;
    while (queue.length && queue[0].progress >= 100) {
      queue.shift();
      cnt++;
    }
    if (cnt > 0) answer.push(cnt);
  }
  return answer;
}
