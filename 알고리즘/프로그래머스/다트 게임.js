function solution(dartResult) {
  const results = [];
  const scoreReg = /\d/;
  const bonusReg = /[SDT]/;
  let cnt = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (scoreReg.test(dartResult[i])) {
      if (dartResult[i + 1] === '0') {
        results.push(+dartResult.substring(i, i + 2));
        i++;
      } else {
        results.push(+dartResult[i]);
      }
    } else if (bonusReg.test(dartResult[i])) {
      switch (dartResult[i]) {
        case 'D':
          results[cnt] = Math.pow(results[cnt], 2);
          break;
        case 'T':
          results[cnt] = Math.pow(results[cnt], 3);
          break;
      }
      cnt++;
    } else {
      if (dartResult[i] === '*') {
        if (cnt - 1 > 0) {
          results[cnt - 2] = results[cnt - 2] * 2;
        }
        results[cnt - 1] = results[cnt - 1] * 2;
      } else {
        results[cnt - 1] = -results[cnt - 1];
      }
    }
  }
  return results.reduce((acc, curr) => acc + curr, 0);
}
