function solution(statues) {
  const numOfStatues = statues.length;
  const max = Math.max(...statues);
  const min = Math.min(...statues);
  
  const diff =  max - min;
  const gaps = diff - numOfStatues + 1;
  
  return gaps;
}