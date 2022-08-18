const solution = (N, r, c) => {
  let cnt = -1;
  let answer;

  const visit = (x, y, pow) => {
    // console.log('visit', x, y, pow);
    if (pow === 1) {
      Z(x, y);
      return;
    }
    const diff = 2 ** (pow - 1);
    visit(x, y, pow - 1);
    visit(x, y + diff, pow - 1);
    visit(x + diff, y, pow - 1);
    visit(x + diff, y + diff, pow - 1);
  };

  const Z = (x, y) => {
    const indexes = [1, 2, 3, 4];
    indexes.forEach((index) => {
      cnt++;
      const pos = move(x, y, index);
      // console.log(cnt, pos, index);
      if (pos[0] === r && pos[1] === c) answer = cnt;
    });
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
