// https://school.programmers.co.kr/learn/courses/30/lessons/172927

function solution(picks, minerals) {
  // ? minerals를 5개씩 나눈다.
  // ? 다이아, 철, 돌 3가지 곡괭이로 모두 캐서, 피로도를 계산한다
  // ? ['dia','dia','dia','iron','iron'], ['dia','iron','stone']
  // ? [5,5,85], [3,7,31]
  // [2,1,4]

  let mineralArr = []
  let temp = []
  for (let i = 0; i < minerals.length; i++) {
    if (temp.length === 5) {
      mineralArr.push(temp)
      temp = []
    }
    temp.push(minerals[i])
    if (i === minerals.length - 1) mineralArr.push(temp)
  }
  let fatiquesArr = []
  for (let i = 0; i < mineralArr.length; i++) {
    // mineralArr -> [ 'diamond', 'diamond', 'diamond', 'iron', 'iron' ], [ 'diamond', 'iron', 'stone' ]
    // let fatiques = [0, 0, 0] // -> 피로도 [5,10,75]
    //1. diamond pick으로 캤을때 -> diamond곡괭이의 fatique는 무조건 길이만큼 들어가게 됨.
    let diaFatique = mineralArr[i].length
    let ironFatique = 0
    let stoneFatique = 0
    for (let j = 0; j < mineralArr[i].length; j++) {
      // mineralArr[i] -> diamond, iron, stone
      // 2. iron pick으로 캤을때
      // diamond를 만났을때는 fatique = fatique + 5
      // iron, stone를 만났을때는 fatique = fatique + 1

      // 3. stone pick으로 캤을때
      // diamond를 만났을떄는 fatique = fatique + 25
      // iron를 만났을떄는 fatique = fatique + 5
      // stone를 만났을떄는 fatique = fatique + 1
      switch (mineralArr[i][j]) {
        case 'diamond':
          ironFatique += 5
          stoneFatique += 25
          break;
        case 'iron':
          ironFatique += 1
          stoneFatique += 5
          break;
        case 'stone':
          ironFatique += 1
          stoneFatique += 1
          break;
      }
    }
    let fatiques = [diaFatique, ironFatique, stoneFatique]
    fatiquesArr.push(fatiques)
  }
  // console.log('fatiquesArr: ', fatiquesArr)
  let result = 0;
  for (let i = 0; i < picks.length; i++) {
    // pick의 크기만큼, fatiquesArr의 앞에서부터 선택하면 됨.
    // diamond pick의 갯수가 j일경우, fatiquesArr의 맨 앞쪽 요소를 j번 shift하고, [i]번째 요소를 가져와서 result에 더해주면 됨.
    // i : 0->diamond, 1->iron, 2->stone
    for (let j = 0; j < picks[i]; j++) {
      if (fatiquesArr.length > 0) result += fatiquesArr.shift()[i]
    }
  }
  return result
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
