function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= Math.ceil(n / 2); j++) {
      sum += j;
      if (sum >= n) {
        if (sum === n) answer += 1; // ++ 보다 +=가 빠름
        break;
      }
    }
  }
  return n > 1 ? answer + 1 : 1;
}
