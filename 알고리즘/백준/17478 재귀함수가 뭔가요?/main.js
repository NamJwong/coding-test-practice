const solution = (N) => {
  const SENTENCES = [
    '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.',
    `"재귀함수가 뭔가요?"`,
    `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`,
    '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
    `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`,
    `"재귀함수는 자기 자신을 호출하는 함수라네"`,
    '라고 답변하였지.',
  ];
  const recursion = (cnt) => {
    if (cnt === N) {
      console.log('____'.repeat(cnt) + SENTENCES[1]);
      console.log('____'.repeat(cnt) + SENTENCES[5]);
      console.log('____'.repeat(cnt) + SENTENCES[6]);
      return;
    }
    for (let i = 1; i < 5; i++) {
      console.log('____'.repeat(cnt) + SENTENCES[i]);
    }
    recursion(cnt + 1);
    console.log('____'.repeat(cnt) + SENTENCES[6]);
  };
  console.log(SENTENCES[0]);
  recursion(0);
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = +fs.readFileSync(file).toString().trim();

solution(N);
