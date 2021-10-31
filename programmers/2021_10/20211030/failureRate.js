function solution(N, stages) {
  // * 전체 스테이지 수 100레벨( N레벨 -> 1 <= N <= 500)
  // * 현재 게임을 이용한 사용자가 멈춰있는 스테이지 배열 stages (1 <= stages.length <= 200000)
  // * stages 배열내 N+1 값은 모든 스테이지를 깬 수
  // * 실패율 = 스테이지에 도달했지만 클리어못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
  // * 실패율이 같은 스테이지는 작은 번호의 스테이지가 오도록

  // * 리턴값
  // * 실패율이 가장 높은 스테이지부터 리턴
  // * 스테이지에 도달한 유저가 없다면 실패율은 0

  // * 실패율 배열 만들기
  // * 1스테이지 실패율
  // * let fail = 0; let total = 0;
  // * 실패율 = fail / total

  // * let level = 1 -> 현재 단계 (level <= N)
  // * 1단계에 도달한 사람 먼저 세기 -> total에 넣기
  // ? if(level <= stages[i]) total++;
  // * 1단계에 멈춰있는 사람 세기 -> fail에 넣기
  // ? if(level = stages[i]) fail++;
  // * for문이 끝나면 실패율 계산 후 실패율Arr.push

  let failure_Array = [];

  for (let level = 1; level <= N; level++) {
    let fail = 0;
    let total = 0;
    for (let i = 0; i < stages.length; i++) {
      if (level <= stages[i]) {
        total++;
        if (level === stages[i]) fail++;
      }
    }
    let fail_rate = fail / total;
    failure_Array.push([level, fail_rate]);
  }

  // * 스테이지별로 변수 지정해서 하는것은 한계가 있음
  // * result 배열의 길이 = N
  // * 실패율 배열을 하나 만들어서, 순서대로 집어넣기
  // * N = 3       1    2     3
  // * 실패율Arr = [1/3, 2/5, 1/4]    [[1,1/3], [2,2/5], [3,1/4]]
  // * [1,2,3]
  // * 실패율이 가장 높은 스테이지부터 result 배열에 넣기
  // * temp = 실패율Arr[0] / stage = 1
  // * for문 -> if(temp > 실패율[i]) temp = 실패율[i], stage = i+1;

  // TODO : 순서대로 정리된 failure_array와 인덱스를 가지고 정렬하기

  failure_Array.sort((a, b) => b[1] - a[1]);
  let result = [];
  for (let el of failure_Array) {
    result.push(el[0]);
  }
  return result;
}

let output = solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
console.log(output); // --> [3,4,2,1,5]

output = solution(4, [4, 4, 4, 4, 4]);
console.log(output); // --> [4,1,2,3]
