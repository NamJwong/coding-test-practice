function solution(p) {
  return convert(p);
}

const convert = (str) => {
  if (str === '') return str;
  const [u, v] = split(str);
  if (checkCorrect(u)) return u + convert(v);
  else {
    let newStr = '(' + convert(v) + ')';
    return newStr + reverse(u.substring(1, u.length - 1));
  }
};

const split = (str) => {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') cnt++;
    else cnt--;
    if (cnt === 0) return [str.substring(0, i + 1), str.substring(i + 1)];
  }
  return null;
};

const checkCorrect = (str) => {
  let cnt = 0;
  for (const s of str) {
    if (s === '(') cnt++;
    else {
      if (cnt) cnt--;
      else return false;
    }
  }
  return true;
};

const reverse = (str) =>
  Array.from(str)
    .map((s) => (s === '(' ? ')' : '('))
    .join('');
