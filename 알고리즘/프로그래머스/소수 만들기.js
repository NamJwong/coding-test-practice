function solution(nums) {
  let answer = 0;

  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let depth;
  const dfs = (sum, idx) => {
    depth++;
    if (depth === 3) {
      if (isPrime(sum)) answer++;
      depth--;
      return;
    }
    for (let i = idx + 1; i < nums.length; i++) {
      dfs(sum + nums[i], i);
    }
    depth--;
  };

  for (let i = 0; i < nums.length - 2; i++) {
    depth = 0;
    dfs(nums[i], i);
  }
  return answer;
}
