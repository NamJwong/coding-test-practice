function solution(s) {
  const arr = s
    .substring(2, s.length - 2)
    .split('},{')
    .map((s) => s.split(','));
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      map.set(arr[i][j], map.get(arr[i][j]) + 1 || 1);
    }
  }
  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map((val) => +val[0]);
}
