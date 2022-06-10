function solution(a) {
  const team1 = [0];
  const team2 = [0];

  for (i in a) {
    if (parseInt(i) % 2 === 0) team1.push(a[i]);
    else team2.push(a[i]);
  }

  const reducer = (accumulator, curr) => accumulator + curr;
  let total1 = team1.reduce(reducer);
  let total2 = team2.reduce(reducer);

  return [total1, total2];
}
