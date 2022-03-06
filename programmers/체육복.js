function solution(n, lost, reserve) {
  for (let i = 0; i < reserve.length; i++) {
    let lostIndex = lost.indexOf(reserve[i]);
    if (lostIndex > -1) {
      reserve.splice(i, 1);
      i--;
      lost.splice(lostIndex, 1);
    }
  }
  let isFirst = false;
  for (let i = 0; i < lost.length; i++) {
    let reserveIndexFront = reserve.indexOf(lost[i] - 1);
    let reserveIndexBack = reserve.indexOf(lost[i] + 1);
    if (reserveIndexFront > -1) {
      lost.splice(i, 1);
      i--;
      reserve.splice(reserveIndexFront, 1);
      if (!isFirst) isFirst = true;
    } else if (reserveIndexBack > -1) {
      lost.splice(i, 1);
      i--;
      reserve.splice(reserveIndexBack, 1);
      if (!isFirst) {
        isFirst = true;
        const temp = reserveIndexFront;
        reserveIndexFront = reserveIndexBack;
        reserveIndexBack = temp;
      }
    } else {
      isFirst = false;
    }
  }
  return n - lost.length;
}
