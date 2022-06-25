function solution(n) {
  let answer = n % 2 === 0 ? 2 : 1;
  const m = (n - 1) / 2;
  for (let i = 0; i < m; i += 2) {
    // answer = parseInt((answer + (n-i+1)) % 1000000007);
    // answer += n-(i+1);
    answer += (i + 1) * (n - i);
  }
  return parseInt(answer % 1000000007);
}
