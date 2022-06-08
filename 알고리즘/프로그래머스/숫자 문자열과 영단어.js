function solution(s) {
  let answer = s;
  const NUMBERS = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  for (let i = 0; i < 10; i++) {
    answer = answer.replace(new RegExp(NUMBERS[i], 'g'), i);
  }
  return Number(answer);
}
