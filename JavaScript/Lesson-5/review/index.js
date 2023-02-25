




//hoistinng=>kutarish

//declaration bolishdan oldin chaqirib olish bu => hoisting

 console.log(num);
 var num;



// console.log(m);
//  let m;

 //var hositing boladi , faqat unndefined chiqaradi , yani u faqat declaration holatida ishlaydi
 //let va const hoisting bulmaydi
// declaration(name) function da hoisting ishlaydi



// console.log(hoisting());


hoisting()

function hoisting() {
    // return 'Hellow'
    console.log("hellow");
    
}


//even odd

function evenOdd(num) {
    num==0&&console.log('this is zero');
    num%2==0&&console.log('Even number');
    num%2==1&&console.log('Odd number');
    
}


console.log("Even odd lists below here: ");
evenOdd(0)
evenOdd(1)
evenOdd(2)
evenOdd(3)
evenOdd(4)
evenOdd(5)
evenOdd(6)
evenOdd(7)
evenOdd(8)
evenOdd(9)
evenOdd(-1)
evenOdd(-2)
