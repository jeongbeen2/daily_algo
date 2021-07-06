function solution(dartResult) {
  let arr = [0, 0, 0];
  let point = -1;
  for (var i = 0; i < dartResult.length; i++) {
    if (Number.isInteger(dartResult[i] * 1)) {
      point++;
      if (dartResult[i] == '1' && dartResult[i + 1] == '0') {
        arr[point] += 10;
        i++;
        continue;
      } else arr[point] += dartResult[i] * 1;
    } else {
      if (dartResult[i] == 'D') arr[point] **= 2;
      else if (dartResult[i] == 'T') arr[point] **= 3;
      else if (dartResult[i] == '*') {
        arr[point] *= 2;
        arr[point - 1] *= 2;
      } else if (dartResult[i] == '#') arr[point] *= -1;
    }
  }
  return arr.reduce((a, b) => a + b);
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
