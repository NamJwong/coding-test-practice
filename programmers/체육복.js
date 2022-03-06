function solution(n, lost, reserve) {
  for (let i = 0; i < reserve.length; i++) {
    let lostIndex = lost.indexOf(reserve[i]);
    if (lostIndex > -1) {
      reserve.splice(i, 1);
      i--;
      lost.splice(lostIndex, 1);
    }
  }
  lost.sort(function (a, b) {
    return a - b;
  });
  reserve.sort(function (a, b) {
    return a - b;
  });
  let lPointer = 0;
  let rPointer = 0;
  let count = 0;
  while (lPointer < lost.length) {
    while (rPointer < reserve.length) {
      const difference = lost[lPointer] - reserve[rPointer];
      if (Math.abs(difference) > 1) {
        if (difference > 0) {
          rPointer++;
        } else {
          break;
        }
      } else {
        rPointer++;
        count++;
        break;
      }
    }
    if (rPointer >= reserve.length) break;
    lPointer++;
  }
  return n - (lost.length - count);
}
