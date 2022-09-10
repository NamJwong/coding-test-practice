function solution(clothes) {
  const map = new Map();
  for (const c of clothes) {
    map.set(c[1], map.get(c[1]) + 1 || 1);
  }
  return Array.from(map).reduce((acc, curr) => (curr[1] + 1) * acc, 1) - 1;
}
