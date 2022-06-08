function solution(s1, s2) {
  // s1 = "aabcc"
  // s2 = "adcaa"
  // find the number of common characters between them
  
  // convert s1 and s2 to array
  let s1Array = s1.split("");
  let s2Array = s2.split("");
  
  // common characters set
  let commonChars = new Set();
  
  // loop s1Array
  for (let i =0; i < s1Array.length; i++) {
      // loop s2Array
      for (let j =0; j < s2Array.length; j++) {
          if (s1Array[i] === s2Array[j]) {
              // add commmon char + s1 + s2 location to commonChars set
              commonChars.add(`${s1Array[i]}${j}`);
              // avoid compare twice same letter at s2
              s2Array[j] = 0;
              // break to next s1 letter to compare with the rest of s2 letters
              break;   
          }
      }
  }
  
  // return common characters from commonChars Set
  return commonChars.size;
}