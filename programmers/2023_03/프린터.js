function solution(priorities, location) {
  var answer = 0;
  return answer;
}

let result = solution([2, 1, 3, 2], 2);
console.log(result); // 1

result = solution([1, 1, 9, 1, 1, 1], 0);
console.log(result); // 5

result = solution([1, 3, 9, 1, 1, 1], 0);
console.log(result); // 6

9,1,1,1,x,3

9,1,1,x,3,1
9,1,x,3,1,1
9,x,3,1,1,1
9,3,1,1,1,x


x,1,9,1,1,1

x = 1

1,9,1,1,1,x
9,1,1,1,x,1



2,1,3,2

x = 3
2,1,x,2

0번째 인덱스와, 나머지 배열에서 가장 큰 값을 미리 저장해놓고, 해당 값보다 작을경우 바로 맨뒤로 넘긴다.

let marking = priorities[location]
priorities.splice() 이용해서 marking으로 배열 수정
