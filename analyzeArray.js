export default function analyzeArray(arr) {
  let length = arr.length;
  if (length === 0) return {};
  let average =
    Math.round(
      (arr.reduce((a, c) => {
        return a + c;
      }, 0) /
        arr.length) *
        100
    ) / 100;
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[length - 1];
  return { average, min, max, length };
}
