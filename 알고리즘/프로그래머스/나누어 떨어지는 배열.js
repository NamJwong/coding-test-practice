function solution(arr, divisor) {
  const answer = [];
  arr.sort((a, b) => a - b);
  for (const num of arr) {
    if (num % divisor === 0) answer.push(num);
  }
  return answer.length ? answer : [-1];
}
