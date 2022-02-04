module.exports = function check(str, bracketsConfig) {
  const bracketsConfigJoin = bracketsConfig.map(item => item[0] + item[1]);
  const leftArr = bracketsConfig.map(item => item[0]);
  const rightArr = bracketsConfig.map(item => item[1]);
  const strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    if (rightArr.includes(strArr[i]) && !leftArr.includes(strArr[i])) return false; // для исключения одной закрывающей скобки (учитывая что есть прямые скобки)
    if (leftArr.includes(strArr[i]) && (strArr[i + 1]) && rightArr.includes(strArr[i + 1]) && (bracketsConfigJoin.includes(strArr.slice(i, i + 2).join('')))) {
      strArr.slice(i, i + 2);
      strArr.splice(i, 2);
      i = -1;
    }
  }
  if (strArr.length == 0) {
    return true
  }
  return false 
}