function solution(a) {
  const length = a.length;
  // positions to avoid
  const avoid = [];
  
  for (let i = 0; i < length; i++) {
      if (a[i] === -1) avoid.push(i);
  }
  // return avoid;
  
  // order array
  let sortedArrRaw = a.sort(function(x, y) {
  return x - y;
  });

  // delete -1
  const sortedArr = sortedArrRaw.slice(avoid.length, length);
      
  // result array
  const result = [];
  
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < length; i++) {
      if (i === avoid[counter1]) {
          result.push(-1);
          counter1++;
      }
      else {
          result.push(sortedArr[counter2]);
          counter2++;
      }
  }
  
  return result;
}