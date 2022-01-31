'use strict';

let num = 266219 + "";
let numToArr = Array.from(num).map(Number);
let countNum = 1;

numToArr.forEach(function(entry) {
  countNum *= entry;
})

countNum **= 3;
console.log(countNum);
let res = Number(String(countNum).substr(0,2));
console.log(res);

