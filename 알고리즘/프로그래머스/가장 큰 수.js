function solution(numbers) {
  const getPermutations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
    return results;
  };

  const permutations = getPermutations(numbers, numbers.length).map(
    (permutation) => permutation.join('')
  );
  permutations.sort((a, b) => b - a);
  return permutations[0];
}
