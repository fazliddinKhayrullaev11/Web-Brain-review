



// myname=NaN;
// console.log(typeof +myname);
// console.log( typeof myname.toFixed());
// console.log(myname);



// console.log(typeof true);   //returns  boolean


// var num=12.45;
// console.log(num.toFixed());

// // toFixed()=> butun qismini olib beradi va stringga utkazib beradi;




// Math.pow =darajaga kotaradi  2ta  qiymat oladi , 1-son , 2 -nechi darajaga kotarish

function myFunc(n,m) {
    return Math.pow(n,m);
    
}

console.log(myFunc(2,3));

// Math.sqrt(); =>ildiz ostidan chaqrish  **(1/2)

function myf(s) {
console.log(Math.sqrt(s));
    
}


myf(100);

// Math.cbrt(); => 3nchi daraja idiz ostidan chiqarish


function cbrt(f) {

    console.log(Math.cbrt(f));
    
}

cbrt(8);  //returns 2



//Math.max()=> sorting =eng kattasi

function max(s,d,f,g,g,) {
    console.log(Math.max(s,d,f,g,g));
    
}


max(12,3,44,6,7)


// Math.abs() = olny  positive result


function abs(l) {

    console.log(Math.abs(l));
    
}

abs(-45.6)



// Math.random)*100

console.log(typeof  +Number.parseInt(Math.random()*100 ).toFixed() ); // 100 gacha bolgan raqamlardan birini tanlab beradi;

// Math.round()=>yaxlitlab beradi;


console.log(Math.round(12.4));
console.log(Math.round(12.5));
console.log(Math.round(12.6)); // 5 yoki  5dan yuqori bolsa bitta keyingi son , agar  5dan kichik bolsa  soni butun qismini 

// Math.floor() => qoldiqni uchirib butun sonni olib beradi

console.log(Math.floor(8.9)); //returns 8


// Math.ceil=> kasr sonni uzidan bitta katta  songa aylantirib beradi

console.log(Math.ceil(8.1)); //returns 9
console.log(Math.ceil(8)); //returns 9
