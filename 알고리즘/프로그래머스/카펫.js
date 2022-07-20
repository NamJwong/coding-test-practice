function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i++) {
    const width = i + 2;
    const height = yellow / i + 2;
    if (width * 2 + height * 2 - 4 === brown)
      return [Math.max(width, height), Math.min(width, height)];
  }
}
