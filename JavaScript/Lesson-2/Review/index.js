




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


