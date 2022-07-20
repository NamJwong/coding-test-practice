function solution(number, k) {
  const remove = (idx) =>
    idx === 0 ? number.slice(1) : number.slice(0, idx) + number.slice(idx + 1);
  for (let i = 1; i <= k; i++) {
    let max = 0;
    for (let j = 0; j < number.length; j++) {
      max = Math.max(+remove(j), max);
    }
    number = max.toString();
  }
  return number;
}
