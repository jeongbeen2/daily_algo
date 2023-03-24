function solution(picks, minerals) {
  let mineralTable = {
    stone: 0,
    iron: 0,
    diamond: 0,
  };

  for (let i = 0; i < minerals.length; i++) mineralTable[minerals[i]]++;
  console.log("mineralTable: ", mineralTable);
  // TODO: stone부터, 가장 등급이 낮은 곡괭이로 캐기
  var answer = 0;
  return answer;
}

let result = solution(
  [1, 3, 2],
  ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
);
console.log(result); // 12

result = solution(
  [0, 1, 1],
  [
    "diamond",
    "diamond",
    "diamond",
    "diamond",
    "diamond",
    "iron",
    "iron",
    "iron",
    "iron",
    "iron",
    "diamond",
  ]
);
console.log(result); // 50
