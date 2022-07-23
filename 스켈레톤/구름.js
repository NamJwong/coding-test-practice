// Run by Node.js

// 입력 형태
// 6
// 3 1 4 1 5 9

const solution = (N, problems) => {
  // 풀이 코드 작성 (프로그래머스와 같은 방식)
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let problems = [];

rl.on('line', function (line) {
  if (!N) {
    N = +line;
  } else {
    problems = line.split('').map((c) => +c);
    rl.close();
    if (problems.length === N) {
      console.log(solution(N, problems));
    } else {
      console.log('잘못된 입력입니다.');
    }
  }
}).on('close', function () {
  process.exit();
});
