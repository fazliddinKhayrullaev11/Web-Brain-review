



// function century(year) {

    // var x = Math.floor(year/100) + 1;
    // return x; 
    // if (Math.floor(year/100) >year) {

    //     return Math.floor(year/100) + 1;
    // } else if(Math.floor(year/100) >year) {

    //     return  Math.floor(year/100)
    // }
      
    // year/100<Math.floor(year/100)&&console.log(Math.floor(year/100)+1);

    //first way
//     var x=Math.floor(year/100) // bu yil
//     var y=year/100
//     var z=Math.floor(year/100)+1
//     if (x==y) {
//         return y
        
//     } else{
//         return z

//     }


//   }
function century(year) {
    return Math.ceil(year/100);

    
}
  console.log(century(1300));
  console.log(century(1310));
