function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    for (let j = i; j <= i; j++) {
      if (participant[i] !== completion[j]) return participant[i];
    }
  }
}

// function solution(participant, completion) {
//   while (completion.length > 0) {
//     let comp = completion.shift();
//     for (let i = 0; i < participant.length; i++) {
//       if (participant[i] === comp) {
//         participant.splice(i, 1);
//         break;
//       }
//     }
//   }
//   return participant[0];
// }

let output = solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']);
console.log(output); // --> 'leo'

output = solution(
  ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
  ['josipa', 'filipa', 'marina', 'nikola']
);
console.log(output); // --> 'vinko'

output = solution(
  ['mislav', 'stanko', 'mislav', 'ana'],
  ['stanko', 'ana', 'mislav']
);
console.log(output); // --> 'mislav'
