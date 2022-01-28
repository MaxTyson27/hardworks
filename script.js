let num = 266219;
let str = String(num);
console.log(typeof str);
let strToArr = Array.from(str);
console.log(strToArr);
let strArrToNum = strToArr.map(Number);
console.log(strArrToNum);
let count = 1;

strArrToNum.forEach(function(entry) {
  count *= entry;
  
});

console.log(count);

count **= 3;
console.log(count);

let countToStr = String(count);
let res = Number(countToStr.substr(0,2));
console.log(res);
