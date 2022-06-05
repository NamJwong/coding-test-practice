function solution(numbers) {
  let answer = 0;
  numbers.sort((a, b) => a - b);
  let i = 0;
  for (let j = 0; j < 10; j++) {
    if (numbers[i] === j) i++;
    else answer += j;
  }
  return answer;
}
