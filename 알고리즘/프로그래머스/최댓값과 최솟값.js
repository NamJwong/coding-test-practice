function solution(s) {
  const numbers = s.split(' ').map((str) => +str);
  return [Math.min(...numbers), Math.max(...numbers)].join(' ');
}
