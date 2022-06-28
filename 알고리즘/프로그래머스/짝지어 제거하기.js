function solution(s) {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      s = s.replace(new RegExp(s[i].repeat(2), 'g'), '');
      i = -1;
    }
  }
  return s.length ? 0 : 1;
}
