function solution(n, a, b) {
  let answer = 1;
  while (answer <= n) {
    if (
      Math.floor((a - 1) / 2 ** answer) !== Math.floor((b - 1) / 2 ** answer)
    ) {
      answer++;
    } else break;
  }
  return answer;
}
