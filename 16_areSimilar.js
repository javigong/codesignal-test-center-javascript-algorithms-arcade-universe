function solution(a, b) {
  // create array with elements that are different
  const aDiff = a.filter((v, i) => v != b[i]);
  const bDiff = b.filter((v, i) => v != a[i]);

  // as aDiff and bDiff has same length
  // check if aDiff has no diff elements
  if (aDiff.length === 0) return true;
  // when aDiff needs one swap, check if the diff numbers are the same at both arrays
  if (aDiff.length === 2 && aDiff.join("") == bDiff.reverse().join("")) return true;
  return false;
}
