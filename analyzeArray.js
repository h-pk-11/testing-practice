function analyzeArray(arr) {
  let length = arr.length;
  let average = Math.round(
    arr.reduce((a, c) => {
      return a + c;
    }, 0) / arr.length
  );
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[length - 1];
  return { average, min, max, length };
}
