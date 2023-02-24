




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

var str='  fozil   ';

console.log(str.trim().toLowerCase().endsWith('l'));
console.log('endWith() .below');

function endsWith(value) {
    if (str.trim().toLowerCase()[str.trim().length-1]==value) {
        console.log(true);
        
    } else if (str.trim().toUpperCase()[str.trim().length-1]==value){
        console.log(true);
    }
     else{
        console.log(false);
     }
}

endsWith('d')


console.log(str.trim().toLowerCase()[str.trim().length-1]=='l');


// var numb=12;
// console.log(numb.toLocaleString().padStart([numb.length-value],value));
function numbertoString(num){
    return num.toString()+''
   
}
    console.log(numbertoString(12))
 


    function solution(number){



        // var str=number.toString();
        // var arr=str.reduce();
        // var temp = ''+number;
        // var arr = [...temp].reduce((acc, n)=> acc.concat(+n), [] );
     for (let i = 0; i <= arr.length; i++) {
            
     }
    
            
        }
        console.log(solution(10));