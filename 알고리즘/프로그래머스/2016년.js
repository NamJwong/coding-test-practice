function solution(a, b) {
  const MONTH_OF_DAYS = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const sumDays = [0];
  for (let i = 1; i <= 12; i++) {
    sumDays[i] = sumDays[i - 1] + MONTH_OF_DAYS[i];
  }
  switch ((sumDays[a - 1] + b - 1) % 7) {
    case 0:
      return "FRI";
    case 1:
      return "SAT";
    case 2:
      return "SUN";
    case 3:
      return "MON";
    case 4:
      return "TUE";
    case 5:
      return "WED";
    case 6:
      return "THU";
    default:
      return console.log(sumDays[a - 1]);
  }
}
