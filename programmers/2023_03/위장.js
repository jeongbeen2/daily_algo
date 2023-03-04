function solution(clothes) {
  let hash = {};
  clothes.forEach((cloth) => {
    if (hash[cloth[1]]) hash[cloth[1]] += 1;
    else hash[cloth[1]] = 1;
  });

  return (
    Object.values(hash)
      .map((el) => el + 1)
      .reduce((acc, cur) => acc * cur) - 1
  );
}

let result = solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
console.log(result); // 5

result = solution([
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["smoky_makeup", "face"],
]);
console.log(result); // 3
