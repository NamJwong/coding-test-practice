function solution(a, b) {
  let answer = 0;
  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }
  for (let i = a; i <= b; i++) {
    answer += i;
  }
  return answer;
}
