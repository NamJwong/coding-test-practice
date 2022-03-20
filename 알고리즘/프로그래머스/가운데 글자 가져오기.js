function solution(s) {
  const mid = Math.ceil(s.length / 2) - 1;
  return s.substring(mid, s.length % 2 === 0 ? mid + 2 : mid + 1);
}
