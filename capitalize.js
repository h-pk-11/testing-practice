export default function capitalize(str) {
  let len = str.length;
  let capitalizedStr = "";
  if (len > 0) {
    capitalizedStr = str[0].toUpperCase() + str.slice(1);
  }
  return capitalizedStr;
}
