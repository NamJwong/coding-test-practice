function solution(clothes) {
  const map = new Map();
  for (const clothe of clothes) {
    map.set(clothe[1], map.get(clothe[1]) + 1 || 1);
  }
  return Array.from(map).reduce((acc, curr) => (curr[1] + 1) * acc, 1) - 1;
}
