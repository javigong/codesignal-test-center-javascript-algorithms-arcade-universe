function solution(matrix) {
  // track ghosts ij
  let ghosts = [];
  let total = 0;
  
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
          if (matrix[row][col] == 0) {
              ghosts.push([row,col]);
          }
      }
  }

  // add rooms without 0 over them
  for (let col = 0; col < matrix[0].length; col++) {
      for (let row = 0; row < matrix.length; row++) {
          const y = [row, col];
          // return ghosts.find(x => JSON.stringify(x) === JSON.stringify(y));
          if (ghosts.find(x => JSON.stringify(x) === JSON.stringify(y)))  {
              break;
          }
          total += matrix[row][col];                
          
      }
  }
  
  return total;
}
