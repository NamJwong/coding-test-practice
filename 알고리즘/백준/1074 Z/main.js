const solution = (N, r, c) => {
  let answer = 0;
  let isFound = false;

  const visit = (x, y, pow) => {
    const rowEnd = x + (2 ** pow - 1);
    const colEnd = y + (2 ** pow - 1);
    if (r < x || r > rowEnd || c < y || c > colEnd) {
      isFound || (answer += (2 ** pow) ** 2);
      return;
    }
    if (pow === 1) {
      isFound = true;
      answer += Z(x, y);
      return;
    }
    const diff = 2 ** (pow - 1);
    visit(x, y, pow - 1);
    visit(x, y + diff, pow - 1);
    visit(x + diff, y, pow - 1);
    visit(x + diff, y + diff, pow - 1);
  };

  const Z = (x, y) => {
    for (let i = 1; i <= 4; i++) {
      const pos = move(x, y, i);
      if (pos[0] === r && pos[1] === c) return i - 1;
    }
  };

  const move = (x, y, index) => {
    switch (index) {
      case 1:
        return [x, y];
      case 2:
        return [x, y + 1];
      case 3:
        return [x + 1, y];
      case 4:
        return [x + 1, y + 1];
    }
  };

  visit(0, 0, N);

  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, r, c] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map((c) => +c);

console.log(solution(N, r, c));
