function solution(str1, str2) {
  const set1 = getSet(str1);
  const set2 = getSet(str2);
  if (!set1.length && !set2.length) return 65536;
  return parseInt(
    (getIntersection(set1, set2).length / getUnion(set1, set2).length) * 65536
  );
}

const getSet = (str) => {
  const set = [];
  let pair = '';
  const engReg = new RegExp('[a-z|A-Z]');
  for (let i = 0; i < str.length; i++) {
    if (engReg.test(str[i])) {
      pair += str[i];
      if (pair.length === 2) {
        set.push(pair.toUpperCase());
        pair = pair.substring(1);
      }
    } else {
      pair = '';
    }
  }
  return set;
};

const getIntersection = (set1, set2) => {
  const intersection = [];
  const tmp = [...set2];
  for (const pair of set1) {
    if (tmp.includes(pair))
      intersection.push(...tmp.splice(tmp.indexOf(pair), 1));
  }
  return intersection;
};

const getUnion = (set1, set2) => {
  console.log('s1', set1);
  console.log('s2', set2);
  for (const pair of set1) {
    if (set2.includes(pair)) set2.splice(set2.indexOf(pair), 1);
  }
  return [...set1, ...set2];
};
