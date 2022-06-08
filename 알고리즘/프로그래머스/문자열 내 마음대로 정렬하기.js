function solution(strings, n) {
  strings.sort((a, b) =>
    a.charAt(n) === b.charAt(n)
      ? a < b
        ? -1
        : 1
      : a.charCodeAt(n) - b.charCodeAt(n)
  );
  return strings;
}
