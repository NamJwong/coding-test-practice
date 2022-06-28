function solution(s) {
  let answer = s.length;
  for (let i = 1; i < s.length; i++) {
    let sliced = '';
    let compressed = [];
    for (let j = 0; j + i - 1 < s.length; j += i) {
      sliced = s.substring(j, j + i);
      if (
        compressed[compressed.length - 1] &&
        compressed[compressed.length - 1][1] === sliced
      )
        compressed[compressed.length - 1][0]++;
      else {
        compressed.push([1, sliced]);
      }
    }
    answer = Math.min(
      answer,
      compressed.flatMap((c) => (c[0] < 2 ? c[1] : c)).join('').length +
        (s.length % i)
    );
  }
  return answer;
}
