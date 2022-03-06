function solution(n, lost, reserve) {
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
    console.log("--------lPointer:" + lPointer + "-------------");
    console.log("lost", lost.join(", "));
    while (rPointer < reserve.length) {
      const difference = lost[lPointer] - reserve[rPointer];
      console.log(`${lost[lPointer]}-${reserve[rPointer]}=${difference}`);
      if (Math.abs(difference) > 1) {
        if (difference > 0) {
          rPointer++;
        } else {
          break;
        }
      } else {
        console.log(rPointer);
        rPointer++;
        count++;
        break;
      }
    }
    if (rPointer >= reserve.length) break;
    lPointer++;
    console.log("lPointer++할때의 rPointer", rPointer);
  }
  return n - (lost.length - count);
}
