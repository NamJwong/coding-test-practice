function solution(n) {
  const numOfOne = n.toString(2).replace(/0/g, '').length;
  do n++;
  while (n.toString(2).replace(/0/g, '').length !== numOfOne);
  return n;
}
