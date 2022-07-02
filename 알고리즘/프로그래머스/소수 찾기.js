function solution(numbers) {
  const numArr = numbers.split('');
  const set = new Set();
  for (let i = 1; i <= numbers.length; i++) {
    const permutation = [
      ...new Set(getPermutations(numArr, i).map((p) => +p.join(''))),
    ];
    for (const p of permutation) {
      set.add(p);
    }
  }
  return [...set].reduce((acc, curr) => {
    if (isPrime(curr)) return acc + 1;
    return acc;
  }, 0);
}

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });
  return results;
};
