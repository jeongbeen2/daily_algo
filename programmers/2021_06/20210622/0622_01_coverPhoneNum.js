function solution(phone_number) {
  let num = phone_number.split('').reverse();
  for (let i = 4; i < num.length; i++) {
    num[i] = '*';
  }
  return num.reverse().join('');
}

let output = solution('01033334444');
console.log(output);

output = solution('027778888');
console.log(output);
