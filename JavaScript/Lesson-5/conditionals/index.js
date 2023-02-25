



function statuss(number) {
    if (number>0&&number<=10) {
        console.log('Fail');
        
    } else if(number>10&&number<=20){
        console.log('Passed');
    }
    else if(number>20&&number<=30){
        console.log('Merit');
    }
    else if(number>30&&number<=35){
        console.log('Distinction');
    }
    
}

 statuss(10) //Fail
 statuss(11) //Passed
 statuss(21)  //Merit
 statuss(31)  //Distinction


 function ceil(num) {
     num>parseInt(num)&&console.log(parseInt(num)+1);
     num==parseInt(num)&&console.log(num);
 }

 ceil(122.1)


 function abs(num) {
    num>0&&console.log(num);
    num<0&&console.log(num*(-1));
    
 }

 abs(-4)

 function round(num) {

    num>=parseInt(num)+0.5&&console.log(parseInt(num)+1);
    num< parseInt(num)+0.5&&console.log(parseInt(num));
    
 }

 round(4.5)