function solution(absolutes, signs) {
  return absolutes.reduce(
    (acc, curr, idx) => (signs[idx] ? acc + curr : acc - curr),
    0
  );
}
