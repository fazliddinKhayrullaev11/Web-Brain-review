

let str1='Fazliddinn';
// console.log([...str1]);
let str2='Khayrullaev';

console.log(str1.slice(4)); // 4chi lengtdan keyingi hammasini kesib tashlaydi
console.log(str2.slice(4));
console.log(str2.slice(20)); // bush string qaytaradi

//slice ga bitta qiymat beriganda , boshidan usha qiymatga tengcha qiymat kesib oladi

console.log(str1.slice(2,6));  // 2nchi indexdan boshlab 6 nchi length gacha kesib beradi
console.log(str2.slice(2,6));  // 2nchi indexdan boshlab 6 nchi length gacha kesib beradi


console.log([...str1].splice(2).toString());
console.log([...str1].slice(2).toString());
console.log(str2.lastIndexOf('a')); // 8
console.log(str2.indexOf('a'));  // 2

console.log(str1.padStart(12, 'm')); //mmfazliddin
console.log(str1.padEnd(14, '-'));  //fazliddin---
 
// console.log();