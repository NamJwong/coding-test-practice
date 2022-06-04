function solution(arr) {
  const answer = [];
  for (const num of arr) {
    if (num !== answer[answer.length - 1]) answer.push(num);
  }
  return answer;
}
