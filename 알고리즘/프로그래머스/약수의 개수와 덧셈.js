function solution(left, right) {
  const getSubmultipleCnt = (num) => {
    let cnt = 0;
    for (let i = 0; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        cnt++;
        if (i !== num / i) cnt++;
      }
    }
    return cnt;
  };
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (getSubmultipleCnt(i) % 2 === 0) answer += i;
    else answer -= i;
  }
  return answer;
}
