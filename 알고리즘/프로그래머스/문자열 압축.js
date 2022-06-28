function solution(s) {
  let minLength = s.length;
  for (let i = 1; i < s.length; i++) {
    let sliced = '';
    let compressed = [];
    for (let j = 0; j + i - 1 < s.length; j += i) {
      sliced = s.substring(j, j + i);
      last = compressed[compressed.length - 1];
      if (last && last[1] === sliced) last[0]++;
      else {
        compressed.push([1, sliced]);
      }
    }
    const compressedStr = compressed
      .flatMap((c) => (c[0] < 2 ? c[1] : c))
      .join('');
    const restLength = s.length % i;
    minLength = Math.min(minLength, compressedStr.length + restLength);
  }
  return minLength;
}
