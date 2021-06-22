function solution(a, b) {
  let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let thrMon = [4, 6, 9, 11];
  let beforeDay = b - 1 + 5;
  let beforeMon = a - 1;
  for (let i = 1; i <= beforeMon; i++) {
    if (thrMon.includes(i)) {
      beforeDay += 30;
    } else {
      beforeDay += 31;
    }
  }
  if (a >= 3) beforeDay -= 2;
  return days[beforeDay % 7];
}

let output = solution(5, 24);
console.log(output); // --> "TUE"
