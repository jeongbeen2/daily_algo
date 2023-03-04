function solution(participant, completion) {
  let hash = {};

  // TODO: 완주한 명단을 hash값에 저장하고, 참가자를 완주자 명단에서 찾는 방식
  // ? hash에 해당 이름이 없으면 key:name, value:1
  // ? 해당 이름이 있으면, 해당 key에 +1로 업데이트
  for (let i = 0; i < completion.length; i++) {
    if (hash[completion[i]]) {
      hash[completion[i]] += 1;
    } else {
      hash[completion[i]] = 1;
    }
  }

  // ?
  for (let i = 0; i < participant.length; i++) {
    if (hash[participant[i]]) {
      hash[participant[i]] -= 1;
      if (hash[participant[i]] < 0) {
        return participant[i];
      }
    } else {
      return participant[i];
    }
  }
}

let result = solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
console.log(result); // "leo"

result = solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["filipa", "josipa", "marina", "nikola"]
);
console.log(result); // "vinko"

result = solution(
  ["mislav", "stanko", "mislav", "ana"],
  ["stanko", "ana", "mislav"]
);
console.log(result); // "mislav"
