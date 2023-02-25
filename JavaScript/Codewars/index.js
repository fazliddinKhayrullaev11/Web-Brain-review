

function numberToPower(number, power){

  
     var sum =1;

     for (var i=0; i<power; i++) {
    
         sum*=number;
     }

     return sum;
  }

  console.log(numberToPower(2,3));

  function pow(num,pow){
    //  var p=1;
    for (let i = 0; i < pow; i++) {
        p*=num
        
    }
    return p
  }

console.log(pow(3,3));