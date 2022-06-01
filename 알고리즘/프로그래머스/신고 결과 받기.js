function solution(id_list, report, k) {
  const answer = [];
  const reportInfo = {};

  for (let id of id_list) {
    reportInfo[id] = { reportList: [], reportedCnt: 0 };
    answer.push(0);
  }

  for (let r of report) {
    const temp = r.split(' ');
    const userID = temp[0];
    const reportID = temp[1];
    if (!reportInfo[userID].reportList.includes(reportID)) {
      reportInfo[userID].reportList.push(reportID);
      reportInfo[reportID].reportedCnt += 1;
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    for (let reportID of reportInfo[id_list[i]].reportList) {
      if (reportInfo[reportID].reportedCnt >= k) answer[i] += 1;
    }
  }
  return answer;
}
