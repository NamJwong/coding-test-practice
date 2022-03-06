function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();
  let lPointer = 0;
  let rPointer = 0;
  while (lPointer < lost.length) {
    while (rPointer < reserve.length) {
      if (Math.abs(lost[lPointer] - reserve[rPointer]) > 1) {
        rPointer++;
      } else {
        lost.splice(lPointer, 1);
        reserve.splice(rPointer, 1);
        lPointer = 0;
        rPointer = 0;
        break;
      }
    }
  }
  return n - lost.length;
}
