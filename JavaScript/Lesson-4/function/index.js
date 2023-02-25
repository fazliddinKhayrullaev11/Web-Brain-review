





function func() {
    return 'hi'
    
}
console.log(func());

 const myFunction=(name ,phone)=> console.log(`Hello ${name} , do you  have IELTS? , your number is ${phone}`);
 

 myFunction('Fazliddin' ,'+99899.948.37.79');
 myFunction('Rayhkona' ,'+99894.618 .0970');


 let str= 'IUGWlsjljqw89ey39y13';

 console.log(str.match(/[0-9]/g).join(''));
 console.log(str.match(/[a-z]/g).join(''));
 console.log(str.match(/[A-Z]/g).join(''));



 function person(name='Fazliddin' , phone='777777', age='25') { //default parametrs
    console.log(`Hello ${name} !!!  Phone is :  ${phone}  age is : ${age}`);
    
 }

person('Messi','55555' ,'35');
person();





function pow(number, degree) {
    console.log(Math.pow(number, degree));
    
}

pow(2,3) //8




function sqrt(number ) {
    
    console.log(number**0.5);
}

sqrt(64) ; //8

//match =>regex da foydalanish uchun method , array qaytaradi;
//match(/[a-z]/g) => a-z gacha kichikina harflarni olib beradi;
//match(/[A-Z]/g)=> A-Z gacha katta harflarni olib beradi

//match(/[0-9]/g) =>0-9 gacha raqamlarni olib beradi;
//join()=> array methodi , string qaytaradi;


