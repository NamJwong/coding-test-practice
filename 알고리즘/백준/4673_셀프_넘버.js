const isSelf = Array(10001).fill(true);
isSelf[0] = false;

for (let i = 1; i <= 10000; i++) {
  let result = i;
  const s = i.toString();
  let shouldStop = false;
  for (let j = 0; j < s.length; j++) {
    result += +s[j];
  }
  if (shouldStop) break;
  isSelf[result] && (isSelf[result] = false);
}

isSelf.forEach((val, idx) => val && console.log(idx));
