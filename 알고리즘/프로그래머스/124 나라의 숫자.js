function solution(n) {
  const answer = [];
  while (n !== 0) {
    if (n % 3 === 0) {
      answer.unshift(4);
      n = Math.floor((n - 1) / 3);
    } else if (n % 3 === 1) {
      answer.unshift(1);
      n = Math.floor(n / 3);
    } else {
      answer.unshift(2);
      n = Math.floor(n / 3);
    }
  }
  return answer.join('');
}
