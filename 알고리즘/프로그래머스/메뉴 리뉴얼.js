function solution(orders, course) {
  let answer = [];
  const orderArr = orders.map((o) => o.split('').sort());
  for (const num of course) {
    const map = new Map();
    for (const order of orderArr) {
      const combination = getCombination(order, num);
      for (const c of combination) {
        const menu = c.join('');
        map.set(menu, map.get(menu) + 1 || 1);
      }
    }
    const mapArr = Array.from(map);
    const max = Math.max(...mapArr.map((menu) => menu[1]));
    if (max > 1)
      answer = answer.concat(
        mapArr.filter((menu) => menu[1] === max).map((menu) => menu[0])
      );
  }
  return answer.sort();
}

const getCombination = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};
