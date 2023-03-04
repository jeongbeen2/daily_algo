function solution(cards1, cards2, goal) {
  let result = goal.filter((el) => {
    if (cards1[0] === el) cards1.shift();
    else if (cards2[0] === el) cards2.shift();
    else return "No";
  });
  return result.length > 0 ? "No" : "Yes";
}

let result = solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
console.log(result); // Yes

result = solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
console.log(result); // No
