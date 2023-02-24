




var mname='Fazliddin         ';
var sname='Khayrullaev';


console.log(mname.slice(0,5));  //Fazli

console.log(mname.indexOf('i')); //4
console.log(mname.lastIndexOf('i')); //7

console.log(mname.repeat(10));
console.log(sname.concat(mname)); //KhayrullaevFazliddin
console.log(mname.padStart(12,'u'));//uuuFazliddin
console.log(mname.padEnd(12,'u')); //Fazliddinuuu

console.log(mname.includes('Faz')); //true
console.log(mname.startsWith('F')); //true
console.log(mname.startsWith('a')); //false
console.log(mname);

console.log(mname.trim().toLowerCase().includes('a')||mname.toUpperCase().includes('k')); //true




