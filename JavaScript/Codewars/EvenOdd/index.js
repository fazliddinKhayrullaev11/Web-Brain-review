function evenOrOdd(num) {
    if (num%2==0) {
        return "Even";
        
    } 
      else if (num%2==1||num%2==-1){
        return "Odd";
    }
}

console.log(evenOrOdd(0));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(7));
console.log(evenOrOdd(2));