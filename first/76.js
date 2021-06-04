/*
 * @Descripttion:
 * @version:
 * @Author: chengchengpeng
 * @Date: 2021-05-14 17:27:28
 * @LastEditors: chengchengpeng
 * @LastEditTime: 2021-05-15 18:29:18
 */
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
let s = "abc", t = "ab"

let map = {}, l = 0,r=0, sum = 0, res = "", flag = false, tMap={}, isFlag = false
for (let i = 0; i<t.length; i++) {
  if (tMap[t.charAt(i)]) {
    tMap[t.charAt(i)]++
  } else{
    tMap[t.charAt(i)] = 1
    map[t.charAt(i)] = "0"
  }
}
const canView = (map) => {
  for (let item in map) {
    if(+map[item] < tMap[item]){
      return false
    }
  }
  return true
}
debugger
while (r<s.length) {
  if(map[s.charAt(r)]) {
    map[s.charAt(r)]++
  }
  if (!isFlag && map[s.charAt(l)]) {
    isFlag = true
  }
  if(!isFlag) {
    i++
  }
  // console.log(s.charAt(r),":",map, l);
  if ( (flag && (s.charAt(r) === s.charAt(l))) || (canView(map) && (s.charAt(r) === s.charAt(l)))) {
    while(!map[s.charAt(l)] || map[s.charAt(l)]>tMap[s.charAt(l)]){
      if(map[s.charAt(l)]){
        map[s.charAt(l)]--
      }
      l++
      if(r-l < sum){
        sum = r-l
        res = s.slice(l,r+1)
      }
    }
    flag = true
  }
  if(canView(map) && !flag && sum === 0) {
    sum = r-l
    res = s.slice(l,r+1)
  }
  r++
}
console.log(res);

