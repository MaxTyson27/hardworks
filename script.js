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


let lang = "en";

if( lang == "ru") {
  console.log("Понедельник");
  console.log("Вторник");
  console.log("Среда");
  console.log("Четверг");
} else if ( lang == "en") {
  console.log("Monday");
  console.log("Thuesday");
  console.log("Wednesday");
  console.log("Sunday");
}

switch (lang) {
  case "ru":
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    break
  case "en":
    console.log("Monday");
    console.log("Thuesday");
    console.log("Wednesday");
    console.log("Sunday");
    break
}

const langArray = [ 
  
   ["Monday", "Thuesday", "Wednesday", "Sunday"], 

   ["Понедельник",  "Вторник", "Среда", "Четверг"]

];

langArray[0].forEach(function (entry) {
  console.log(entry);
});


let namePerson = "Александр";

namePerson == "Артем" ? console.log("директор") : console.log("студент");
namePerson == "Александр" ? console.log("преподаватель") : console.log("студент");
