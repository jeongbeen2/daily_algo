function solution(s, skip, index) {
  let word = s.split("");
  let filterArr = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((a) => !skip.split("").includes(a));
  return word
    .map((_, i) => {
      let newIndex = filterArr.indexOf(word[i]) + index;
      while (newIndex > filterArr.length - 1) newIndex -= filterArr.length;
      return filterArr[newIndex];
    })
    .join("");
}
