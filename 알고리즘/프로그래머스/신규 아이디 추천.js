function solution(new_id) {
  let answer = '';
  answer = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '');
  if (!answer.length) answer = 'a';
  if (answer.length > 15) {
    answer = answer.substring(0, 15);
  }
  answer = answer.replace(/\.$/g, '');
  while (answer.length <= 2) {
    answer += answer[answer.length - 1];
  }
  return answer;
}
