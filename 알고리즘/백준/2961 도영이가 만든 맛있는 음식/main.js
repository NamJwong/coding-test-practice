const solution = (ingredients) => {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (idx, sour, bitter, cnt) => {
    if (Math.abs(sour - bitter) < answer && cnt > 0)
      answer = Math.abs(sour - bitter);
    if (idx + 1 === ingredients.length) return;
    dfs(
      idx + 1,
      sour * ingredients[idx + 1][0],
      bitter + ingredients[idx + 1][1],
      cnt + 1
    );
    dfs(idx + 1, sour, bitter, cnt);
  };

  dfs(0, ingredients[0][0], ingredients[0][1], 1);
  dfs(0, 1, 0, 0);

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(file).toString().trim().split('\n');
const [N, ...numbers] = inputs;

console.log(solution(numbers.map((num) => num.split(' ').map((n) => +n))));
