function solution(m, n, board) {
  let answer = 0;

  let arr = Array.from(Array(n), () => Array(m).fill(false));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[i][j] = board[m - 1 - j][i];
    }
  }

  const checkCorrectIdx = (x, y) => {
    if (arr[x] === undefined) return false;
    if (arr[x][y] === undefined) return false;
    return true;
  };

  const checkFour = (x, y) => {
    if (
      !(
        checkCorrectIdx(x, y - 1) &&
        checkCorrectIdx(x + 1, y) &&
        checkCorrectIdx(x + 1, y - 1)
      )
    )
      return;
    const char = arr[x][y];
    const around = [arr[x][y - 1], arr[x + 1][y], arr[x + 1][y - 1]];
    return around.every((a) => a === char);
  };

  const play = () => {
    const set = new Set();

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (checkFour(i, j)) {
          set.add(`${i},${j}`);
          set.add(`${i + 1},${j}`);
          set.add(`${i},${j - 1}`);
          set.add(`${i + 1},${j - 1}`);
        }
      }
    }

    const removedLength = [...set].length;
    if (removedLength < 1) return false;
    else answer += removedLength;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (set.has(`${i},${j}`)) {
          arr[i][j] = null;
        }
      }
    }

    for (let i = 0; i < n; i++) {
      while (arr[i].includes(null)) {
        const start = arr[i].indexOf(null);
        let end = start;
        while (end + 1 === null) end++;
        arr[i] = [...arr[i].slice(0, start), ...arr[i].slice(end + 1)];
      }
    }
    return true;
  };

  while (true) {
    if (!play()) break;
  }

  return answer;
}

// test 위해 반시계로 다시 돌려보는 코드 (사실 의미 없었지만 커밋해두고 싶어서)
const rotate = (arr, n, m) => {
  let newArr = Array.from(Array(m), () => Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      newArr[i][j] = arr[j][m - 1 - i];
    }
  }
  return newArr;
};
