function solution(clothes) {
  let answer = 0;
  const map = new Map();
  for (const clothe of clothes) {
    if (map.get(clothe[1])) map.get(clothe[1]).push(clothe[0]);
    else map.set(clothe[1], [clothe[0]]);
  }
  const arr = Array.from(map);
  const temp = arr.reduce((acc, curr) => acc * curr[1].length, 1);

  const getFactorial = (num) => {
    let counter = 1;
    for (let i = 2; i <= num; i++) counter *= i;
    return counter;
  };

  for (let i = 1; i <= arr.length; i++) {
    answer += getFactorial(i) * temp;
  }
  return answer;
}
