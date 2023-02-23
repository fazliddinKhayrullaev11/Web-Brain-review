




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

//  ! (not) =emas

console.log(!false);
console.log(!true);



var result=meva=='olma'||meva=='nok';
result&&console.log('Hol meva');

// 


// finding odd or even


function oddEven(num) {

    if (num%2==0&&num!==0) {
        console.log('Even number');
        
    } else if(num%2==1) {
         console.log('Odd number');

    } else if(num==0){
        console.log('this is null');

    }
    //  else{
    //     console.log('Odd number');
    //  }
    
}

oddEven(53);
oddEven(0);



// Compition grades checker


function comp(grade) {
    if (grade<20) {
        console.log('Failed');
        
    }
     else if (grade>20&& grade<30){
        console.log('passed');
     }
    else if(grade>30&&grade<35){
        console.log('Merit');
    } else if(grade>35&&grade<40){
        console.log('Distinction');
    } else{
        console.log('wrong information!!!');
    }
}


comp(19); // failed
comp(21);//passed
comp(33); //merit
comp(36); //distinction
comp(56); // wrong information




// Math.pow()=> darajaga kotarib beradi

console.log(Math.pow(2,4)); //16
console.log(Math.pow(2,2)); //4
console.log(Math.pow(2,3));  //8




//Math.sqrt() => ildiz ostidan chiqarish
console.log(Math.sqrt(64));  //8
console.log(Math.sqrt(49)); //7
console.log(Math.sqrt(36)); //6

console.log(Math.sqrt(91));  //9.539



//Math.random () => random son , default 0 dann 1gacha
console.log(Math.random());


//Math.abs()=> absolute qiymat , faqat positive
console.log(Math.abs(-91));
console.log(Math.abs(91));
