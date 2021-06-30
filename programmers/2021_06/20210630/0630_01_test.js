function solution(answers) {
  let first = {
    id: 1,
    ans: [1, 2, 3, 4, 5],
    count: 0,
  };
  let second = {
    id: 2,
    ans: [2, 1, 2, 3, 2, 4, 2, 5],
    count: 0,
  };
  let third = {
    id: 3,
    ans: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    count: 0,
  };
  let supos = [first, second, third];
  // 3명의 수포자가 맞춘 문제 수 구하기
  for (let supo of supos) {
    for (let i = 0; i < answers.length; i++) {
      if (!supo.ans[i]) supo.ans = supo.ans.concat(supo.ans);
      if (supo.ans[i] === answers[i]) supo.count++;
    }
  }
  // 수포자들 중 가장 많이맞춘 사람의 점수 구하기
  let result = [];
  let highest = 0;
  for (let supo of supos) {
    if (highest <= supo.count) highest = supo.count;
  }
  // 동점자를 가려내기 위해 같은사람이 있는지 확인.
  supos.map((supo) => {
    if (supo.count === highest) result.push(supo.id);
  });
  return result;
}

let output = solution([1, 3, 2, 4, 2]);
console.log(output); // --> [1,2,3]

output = solution([1, 2, 3, 4, 5]);
console.log(output); // --> [1]
