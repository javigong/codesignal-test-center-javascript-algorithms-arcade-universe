function solution(n) {
  // split number to array
  const nArr = Array.from(String(n), n => +n);
  
  const length = nArr.length;
  
  const half = length / 2;
  
  let sum1 = 0;
  let sum2 = 0;
  
  for (let i = 0; i < half; i++) {
      sum1 += nArr[i];
  }
  
  for (let i = half; i < length; i++) {
      sum2 += nArr[i];
  }
  
  if (sum1 === sum2) return true
  else return false;
}