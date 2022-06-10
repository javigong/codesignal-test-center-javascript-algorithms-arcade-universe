function solution(inputString) {
  const asArray = inputString.split("");
  let opening = 0;

  while (asArray.includes(")")) {
    for (i in asArray) {
      const char = asArray[i];
      if (char === "(") opening = parseInt(i) + 1;
      if (char === ")") {
        reversed = asArray.slice(opening, i).reverse();

        for (j in reversed) {
          realIndex = opening + parseInt(j);
          asArray[realIndex] = reversed[j];
        }

        asArray[opening - 1] = "";
        asArray[i] = "";

        break;
      }
    }
  }

  return asArray.join("");
}
