function solution(n, lost, reserve) {
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      reserve.splice(i, 1);
      i--;
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
    }
  }
  return n - lost.length;
}
