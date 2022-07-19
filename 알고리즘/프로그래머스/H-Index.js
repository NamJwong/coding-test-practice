function solution(citations) {
  const len = citations.length;
  citations = [null, ...citations.sort((a, b) => b - a)];

  const max = citations[1] <= len ? citations[1] : len;

  for (let i = max; i > -1; i--) {
    if (citations[i] >= i) return i;
  }
}
