function solution(sizes) {
  let width = 0;
  let height = 0;
  sizes.map((size) => {
    width = Math.max(width, Math.min(size[0], size[1]));
    height = Math.max(height, Math.max(size[0], size[1]));
  });
  return width * height;
}
