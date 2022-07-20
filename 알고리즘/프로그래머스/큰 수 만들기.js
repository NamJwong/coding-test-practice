function solution(number, k) {
  const answerLen = number.length - k;
  const stack = number
    .split('')
    .map((c) => +c)
    .reverse();
  const answer = Array.from(Array(answerLen).fill(-1));
  for (let i = 1; i <= answerLen; i++) {
    const range = stack.length - answerLen + i;
    // 시간 조금 줄어듦. 가장 bad case인 10번 기준 4605.76ms -> 4261.59ms
    if (stack[stack.length - 1] === 9) {
      answer[i - 1] = stack.pop();
      continue;
    }
    // max 구하는 방법 3가지. 내림차순으로 빠르며 방법 1 외에는 시간 초과가 난다.
    // 방법 1
    let max = -1;
    for (let j = stack.length - 1; j >= stack.length - range; j--) {
      if (max < stack[j]) max = stack[j];
    }
    // 방법 2
    // const max = Math.max(...stack.slice(-range));
    // 방법 3
    // const max = stack.slice(-range).sort((a, b) => b-a)[0];

    while (max !== stack[stack.length - 1]) stack.pop();
    answer[i - 1] = stack.pop();
  }
  return answer.join('');
}
