function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;
  while (l <= r) {
    answer++;
    if (l === r) break;
    if (people[l] + people[r] <= limit) l++;
    r--;
  }
  return answer;
}
