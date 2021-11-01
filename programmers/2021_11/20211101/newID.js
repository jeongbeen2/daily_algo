function solution(new_id) {
  // TODO : 유저가 아이디를 입력했을 때, 아이디와 유사하면서 규칙에 맞는 아이디 추천
  // * 3 <= new_id <= 15
  // * 소문자, 숫자, -, _, . 사용가능
  // * .은 처음과 끝에 사용불가, 연속 사용 불가

  // ? 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
  let id_arr = new_id.toLowerCase().split("");

  // ? 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.

  // ? 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
  // ? 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
  // ? 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
  // ? 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
  // ?      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
  // ? 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
  return id_arr;
  // ! 2단계
}

let output = solution("...!@BaT#*..y.abcdefghijklm");
console.log(output); // --> "bat.y.abcdefghi";

// output = solution("z-+.^.");
// console.log(output); // --> "z--";

// output = solution("=.=");
// console.log(output); // --> "aaa";

// output = solution("123_.def");
// console.log(output); // --> "123_.def";

// output = solution("abcdefghijklmn.p");
// console.log(output); // --> "abcdefghijklmn";
