function solution(s) {
  return s
    .toLowerCase()
    .replace(/\s[a-z]/g, (c) => c.toUpperCase())
    .replace(/^[a-z]/, (c) => c.toUpperCase());
}
