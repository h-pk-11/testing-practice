export default function caesarCipher(str, factor) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  str = str.trim();
  if (factor < 1) return str;
  let len = str.length;
  if (len < 1) return "";
  let cipher = "";
  let alphabetLen = alphabet.length;
  for (let i = 0; i < len; i++) {
    let char = str[i];
    if (alphabet.includes(char.toLowerCase())) {
      let index = (alphabet.indexOf(char.toLowerCase()) + factor) % alphabetLen;
      console.log(alphabet.indexOf(char.toLowerCase()), index);
      char = alphabet[index].toUpperCase();
    }
    cipher += char;
  }
  return cipher;
}
