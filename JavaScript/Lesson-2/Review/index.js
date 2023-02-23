




// Hoisting



// Hoisting => in variables
// var first='first';
// var second ='second';
// var third='third';

// console.log(`${first} ${second} ${third}`);
// console.log(`${first} ${second} ${third}`); 



// hoisting name functionlarda ham ishlaydi


// console.log(myname());
// console.log(myname('Fazliddin'));

// function myname(name) {
//     if (name=='Fazliddin') {
//         return 'This is my name!'

        
//     } else{
//         return 'This is not my name MotherFucker!'
//     }
    
// } returns else condition "This is  not my name MotherFucker!!!"




// console.log(myname());

var myname=function () {
    var name="Fazliddin";
    return name
    
}
console.log(myname());
//Math.round()=>yaxlitlab beradi

console.log(6==6||5==6&&5==5);
console.log(Math.round(8.9));
console.log(Math.round(8.5));
console.log(Math.round(8.4));


// Math.floor()=>faqat butun qismini olib beradi
console.log(Math.floor(8.2));
console.log(Math.floor(8.5));
console.log(Math.floor(8.7));





//Math.ciel()=> onli kasrni, Bitta katta qiymatga kutarib beradi
console.log(Math.ceil(9.3));
console.log(Math.ceil(9.7));
console.log(Math.ceil(9.1));
console.log(Math.ceil(9.8));



// Math.trunc()=kasr sonning butun qismini olib beradi
console.log(Math.trunc(23.1));
console.log(Math.trunc(23.5));
console.log(Math.trunc(23.8));

// ==



// && and  , ikkita xolat teng bolganda ishlaydi
var meva='olma'

 meva=='olma'&&console.log('Meva bor');


