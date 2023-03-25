// https://school.programmers.co.kr/learn/courses/30/lessons/172927

function solution(picks, minerals) {
  let mineralTable = {
    stone: 0,
    iron: 0,
    diamond: 0,
  };

  for (let i = 0; i < minerals.length; i++) mineralTable[minerals[i]]++;
  console.log("mineralTable: ", mineralTable);
  // TODO: stone부터, 가장 등급이 낮은 곡괭이로 캐기
  // -> 연속 5번 캐야함. 미네랄이 몇개 없을경우 손해
  // 가장 등급이 높은 곡괭이로, 높은 등급의 돌부터 캐야함.
  // ? picks = [stone, iron, diamond]
  // ? 여러번 캐고나서 피로도를 비교할 순 없음. 캘때부터 효율적으로 캐야함.
  // mineral = [1,3,4]
  // picks = [1,3,2]



  let answer = 0;
  for (let pick of picks) {
    console.log('pick: ', pick)
  }

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
