function solution(skill, skill_trees) {
  let answer = 0;

  const checkTree = (tree) => {
    let order = -1;
    for (const t of tree) {
      if (skill.includes(t)) {
        const idx = skill.indexOf(t);
        if (order + 1 === idx) {
          order++;
        } else {
          return 0;
        }
      }
    }
    return 1;
  };

  for (const tree of skill_trees) {
    answer += checkTree(tree);
  }

  return answer;
}
