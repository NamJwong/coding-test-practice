function solution(N, stages) {
  const stageInfo = [];
  for (let stage = 1; stage <= N; stage++) {
    const fail = stages.reduce(
      (acc, curr) => (curr === stage ? acc + 1 : acc),
      0
    );
    const reach = stageInfo[stage - 2]
      ? stageInfo[stage - 2].reach - stageInfo[stage - 2].fail
      : stages.length;
    stageInfo.push({
      stage: stage,
      fail: fail,
      reach: reach,
      rate: fail / reach,
    });
  }
  return stageInfo
    .sort((a, b) => {
      if (a.rate === b.rate) return a.stage - b.stage;
      return b.rate - a.rate;
    })
    .map((stage) => stage.stage);
}
