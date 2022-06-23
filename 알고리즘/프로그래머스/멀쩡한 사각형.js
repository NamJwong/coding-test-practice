function solution(w, h) {
  const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
  return w * h - w - h + getGCD(w, h);
}
