const solution = (s) => {
  let operands = s.match(new RegExp(/[0-9]{1,5}/, 'g')).map(Number);
  let operators = s.match(new RegExp(/\+|-/, 'g'));
  if (!operators) return operands[0];

  let answer = operands[0];
  const firstMinus = operators.indexOf('-');
  const isExistMinus = firstMinus > -1;
  if (isExistMinus) {
    for (let i = 0; i < firstMinus; i++) {
      answer += operands[i + 1];
    }
  } else return operands.reduce((acc, curr) => acc + curr, 0);

  let sum = 0;
  for (let i = isExistMinus ? firstMinus : 0; i < operators.length; i++) {
    if (operators[i] === '+') sum += operands[i + 1];
    else {
      answer -= sum;
      sum = operands[i + 1];
    }
  }
  answer -= sum;
  return answer;
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const s = fs.readFileSync(file).toString().trim();

console.log(solution(s));
