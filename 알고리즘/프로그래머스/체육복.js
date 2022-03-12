function solution(n, lost, reserve) {
  for (let i = 0; i < reserve.length; i++) {
    let lostIndex = lost.indexOf(reserve[i]);
    if (lostIndex > -1) {
      reserve.splice(i, 1);
      lost.splice(lostIndex, 1);
      i--;
    }
  }

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let lPointer = 0;
  let rPointer = 0;
  let cnt = 0;
  for (; lPointer < lost.length; lPointer++) {
    while (rPointer < reserve.length) {
      const diff = lost[lPointer] - reserve[rPointer];
      if (Math.abs(diff) > 1) {
        if (diff > 0) {
          rPointer++;
        } else {
          break;
        }
      } else {
        rPointer++;
        cnt++;
        break;
      }
    }
    if (rPointer >= reserve.length) break;
  }
  return n - (lost.length - cnt);
}
