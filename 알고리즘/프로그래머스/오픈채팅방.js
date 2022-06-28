function solution(record) {
  const result = [];
  const action = ['Enter', 'Leave', 'Change'];
  const actionStr = ['들어왔습니다.', '나갔습니다.'];
  const user = new Map();
  for (const r of record) {
    const recordRow = r.split(' ');
    switch (recordRow[0]) {
      case action[0]:
        user.set(recordRow[1], recordRow[2]);
        result.push([recordRow[1], 0]);
        break;
      case action[1]:
        result.push([recordRow[1], 1]);
        break;
      case action[2]:
        user.set(recordRow[1], recordRow[2]);
        break;
    }
  }
  return result.map((r) => `${user.get(r[0])}님이 ${actionStr[r[1]]}`);
}
