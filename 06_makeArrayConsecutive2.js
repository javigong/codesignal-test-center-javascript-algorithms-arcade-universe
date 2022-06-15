function solution(statues) {
  const numOfStatues = statues.length;
  const max = Math.max(...statues);
  const min = Math.min(...statues);

  const diff = max - min + 1;
  const gaps = diff - numOfStatues;

  return gaps;
}
