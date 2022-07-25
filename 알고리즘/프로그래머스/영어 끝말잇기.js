function solution(n, words) {
  const set = new Set();
  set.add(words[0]);
  for (let i = 1; i < words.length; i++) {
    if (
      set.has(words[i]) ||
      words[i - 1][words[i - 1].length - 1] !== words[i][0]
    )
      return [(i % n) + 1, Math.floor(i / n) + 1];
    else set.add(words[i]);
  }
  return [0, 0];
}
