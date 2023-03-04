function solution(keymap, targets) {
  let answer = [];
  targets.map((target) => {
    let results = target.split("").map((el) => {
      let index = keymap.map((key) =>
        key.indexOf(el) === -1 ? 999 : key.indexOf(el)
      );
      return index.reduce((prev, cur) => (prev > cur ? cur : prev)) + 1;
    });
    let result = results.reduce((acc, cur) => acc + cur);
    if (result > 999) result = -1;
    answer.push(result);
  });

  return answer;
}

let result = solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]); //	[9, 4]
console.log(result);

result = solution(["AA"], ["B"]); // [-1]
console.log(result);

result = solution(["AGZ", "BSSS"], ["ASA", "BGZ"]); // 	[4, 6]
console.log(result);
