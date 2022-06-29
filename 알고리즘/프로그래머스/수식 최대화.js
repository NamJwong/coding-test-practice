function solution(expression) {
  let operatorCopy = expression.match(new RegExp('[-|*|+]', 'g'));
  let operandCopy = expression.split(new RegExp('[-|*|+]', 'g'));
  const priorityPermutation = [
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['*', '-', '+'],
    ['*', '+', '-'],
    ['+', '*', '-'],
    ['+', '-', '*'],
  ];
  let answer = 0;
  let operator;
  let operand;
  for (const priority of priorityPermutation) {
    operator = [...operatorCopy];
    operand = [...operandCopy];
    for (const p of priority) {
      for (let i = 0; i < operator.length; i++) {
        if (operator[i] === p) {
          operand.splice(
            i,
            2,
            operate(+operand[i], +operand[i + 1], operator[i])
          );
          operator.splice(i, 1);
          i = -1;
        }
      }
    }
    answer = Math.max(answer, Math.abs(operand[0]));
  }
  return answer;
}

const operate = (a, b, operand) => {
  switch (operand) {
    case '*':
      return a * b;
    case '-':
      return a - b;
    case '+':
      return a + b;
  }
};
