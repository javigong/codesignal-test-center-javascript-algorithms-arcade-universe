function solution(inputArray) {
  // inputArray = ["aba", "aa", "ad", "vcd", "aba"]
  // return another array with all its longest strings
  
  // store lengths of each string
  let lengths = [];
  inputArray.map(x => lengths.push(x.length));
  
  // get max length from lengths array
  const maxLength = Math.max(...lengths)
  
  // add longest strings to new array and return
  let newArray = [];
  inputArray.map(x => {
      if (x.length == maxLength) newArray.push(x);
  });
  
  return newArray;
}
