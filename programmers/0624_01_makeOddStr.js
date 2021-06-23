function solution(s) {
  return s
    .split(' ')
    .map((el) => {
      let result = '';
      for (let i = 0; i < el.length; i++) {
        if (i % 2 === 0) result += el[i].toUpperCase();
        else result += el[i].toLowerCase();
      }
      return result;
    })
    .join(' ');
}
let output = solution('try hello world');
console.log(output); //--> "TrY HeLlO WoRlD"
