function solution(s) {
  const numbers = s.split(' ');
  return [Math.min(...numbers), Math.max(...numbers)].join(' ');
}
