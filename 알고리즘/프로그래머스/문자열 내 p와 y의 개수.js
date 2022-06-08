function solution(s) {
  const lowS = s.toLowerCase();
  return lowS.split('p').length - 1 === lowS.split('y').length - 1;
}
