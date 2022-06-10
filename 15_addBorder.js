function solution(picture) {
  const answer = [];
  let length = 0;

  for (i in picture) {
    let arr = picture[i].split("");
    arr.push("*");
    arr.unshift("*");
    length = arr.length;
    answer.push(arr.join(""));
  }

  const border = new Array(length).fill("*").join("");
  answer.push(border);
  answer.unshift(border);

  return answer;
}
