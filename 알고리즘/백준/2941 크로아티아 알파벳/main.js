const solution = (s) => {
  let answer = 0;
  const alphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  for (let i = 0; i < s.length; i++) {
    if (alphabets.includes(s.slice(i, i + 3))) i += 2;
    else if (alphabets.includes(s.slice(i, i + 2))) i += 1;
    answer++;
  }
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(file).toString().trim();

console.log(solution(s));
