export default function reverseString(str) {
  let len = str.length;
  let reversedStr = "";
  if (len > 0) {
    reversedStr = [...str].reverse().join("");
  }
  return reversedStr;
}
