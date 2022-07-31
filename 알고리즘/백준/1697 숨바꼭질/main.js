const solution = (N, K) => {
  const dfs = (num, cnt) => {
    if (num === K) {
      return cnt;
    }
    dfs(num - 1, cnt + 1);
    dfs(num + 1, cnt + 1);
    dfs(num * 2, cnt + 1);
  };

  return dfs(N, 1);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map((c) => +c);

console.log(solution(N, M));
