function solution(s) {
  const stack = [];
  if (s.replace(/\(/g, '').length !== s.length / 2) return false;
  for (const bracket of s) {
    if (!stack.length && bracket === ')') return false;
    if (bracket === ')' && stack[stack.length - 1] === '(') stack.pop();
    else stack.push(bracket);
  }
  return stack.length ? false : true;
}
