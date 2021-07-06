function solution(dartResult) {
  let result = [];
  let num = '1234567890';
  let temp = '';
  let SDT = ['S', 'D', 'T'];
  let bonus = ['*', '#'];
  for (let i = 0; i < dartResult.length; i++) {
    if (num.includes(dartResult[i])) {
      temp += dartResult[i];
    } //
    else if (SDT.includes(dartResult[i])) {
      if (temp !== '') {
        result.push(temp);
        temp = '';
      }
      temp = result.pop();
      if (dartResult[i] === 'S') temp = parseInt(temp) ** 1;
      else if (dartResult[i] === 'D') temp = parseInt(temp) ** 2;
      else if (dartResult[i] === 'T') temp = parseInt(temp) ** 3;
      result.push(temp);
      temp = '';
    } //
    else if (bonus.includes(dartResult[i])) {
      if (dartResult[i] === '#') {
        temp = result.pop();
        temp = -temp;
        result.push(temp);
        temp = '';
      } //
      else if (dartResult[i] === '*') {
        result = result.map((el) => el * 2);
        if (i === dartResult.length - 1) result[0] /= 2;
      }
    }
  }
  return result.reduce((acc, cur) => acc + cur);
}
let output = solution('1S2D*3T');
console.log(output); // --> 37

output = solution('1D2S#10S');
console.log(output); // --> 9

output = solution('1D2S0T');
console.log(output); // --> 3

output = solution('1S*2T*3S');
console.log(output); // --> 23

output = solution('1D#2S*3S');
console.log(output); // --> 5

output = solution('1T2D3D#');
console.log(output); // --> -4

output = solution('1D2S3T*');
console.log(output); // --> 59
