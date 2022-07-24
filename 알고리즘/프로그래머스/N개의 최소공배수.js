function solution(arr) {
  let answer = Math.max(...arr);
  let isLCM = false;
  while (!isLCM) {
    isLCM = true;
    for (const n of arr) {
      if (answer % n !== 0) {
        answer++;
        isLCM = false;
        break;
      }
    }
  }
  return answer;
}
