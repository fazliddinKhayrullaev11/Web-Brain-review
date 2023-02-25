

// Functions  types = function delaration , function expression , arrow function





//declaration=> name function = hoisting boladi

loveStory("me");

function loveStory(you ) {
    if (you =="me") {
       
     console.log("i dont believe ");
        
    }  else if (you!=='me')
   console.log("me as well");
    
};

// me()

// Function expression= anonymous function = hoisting bolmaydi

var me =function () {
    console.log('Fuckyou!!!');
    
}

me()

// arrow function = hoisting bolmaydi


 let you =()=>{
    console.log('you are shit');
 }


 you() ;







