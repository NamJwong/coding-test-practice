const solution = (N, M) => {
  const getPermutations = (arr, num) => {
    const results = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const permutations = getPermutations(rest, num - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
    return results;
  };

  getPermutations(
    Array(N)
      .fill(null)
      .map((_, idx) => idx + 1),
    M
  ).forEach((p) => console.log(...p));
};

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map((c) => +c);

solution(N, M);
