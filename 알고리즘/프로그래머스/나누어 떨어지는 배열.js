function solution(arr, divisor) {
  const answer = arr.sort((a, b) => a - b).filter((num) => num % divisor === 0);
  return answer.length ? answer : [-1];
}
