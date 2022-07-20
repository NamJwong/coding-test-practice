function solution(n) {
  const memo = Array.from(Array(n).fill(-1));
  memo[0] = 0;
  memo[1] = 1;
  // const F = (n) => {
  //     if(memo[n] > -1) return memo[n];
  //     memo[n] = F(n - 1) + F(n - 2);
  //     return memo[n];
  // }
  // return F(n) % 1234567;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + (memo[i - 2] % 1234567);
  }

  return memo[n] % 1234567;
}
