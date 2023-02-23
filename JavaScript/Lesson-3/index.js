

// String



// index and length

var string= 'Fazliddin';
console.log(string);
var string= `Fazliddin`;
console.log(string);
console.log(string[string.length-1]);

var string= "19252345L";
console.log(string); //19252345
console.log(string);//19252345
console.log(+string); //NaN because of L


console.log(string[3]);// 5 (0=1, 1=9,2=2,3=5)
console.log( string[string.length-1]);   //the last letter




var str =`

I will fuck fou!!



`;
console.log(str);
console.log(str.length);


var sur_name='Messi';
var name='Leo';
var myn=`My name is :${name} ${sur_name} `
console.log(myn);

// \n =new line

//\t = tab , joy tashlab beradi

// \r faqat ong tarafdagi texni chiqaradi




//toLowerCase()=>kichkina harfga ugiradi
//toUpperCase()=>kattaga harfga ugiradi
//trim()=> ikki yonidagi white space ni yuqotib beradi
console.log(`${name}\r${sur_name}`);  //Messi


console.log(name.toLowerCase());  //leo
console.log(`${name} ${sur_name}`.toLowerCase()); //leo messi
console.log(`${name} ${sur_name}`.toUpperCase()); //LEO MESSI


var me='    Fazliddin     Kh           '; //Fazliddin   kh

console.log(me.trim());


//startsWith()=> malum bi harf bilan boshlangan yoki yoqligini tekshiradi va boolean qaytaradi
//endsWith()=> malum bir harf bilan tugagan yoki yoqligini tekshiradi va boolean qaytaradi
var st='Me';
console.log(st.startsWith('m')); // false
console.log(st.endsWith('e')); // true


//padStart()=> text ni boshidan  , birincisi length va ikkinchisi nima qushmoqchiligimiz
//padEnd()=> text ni oxiridan  , birincisi length va ikkinchisi nima qushmoqchiligimiz
console.log(st.padStart(4,'a'));  //aaaaMe
console.log(st.padEnd(6,'.'));   //me ....

var str1 ='Web';
var str2 ='brainedefeffff'
// str1=str2;  

console.log(str1);
console.log(str2);




//concat()=> bir biriga qushib beradi
console.log(str1.concat(str2)); // Web brain
console.log(str1.concat(str2 , "hello")); // Webbrainhello

// replace()=>almashtirish
console.log(str1.replace('b', 'd')); //drain

//repeat()=> takrorlash
console.log(str2.repeat(10)); // 10 brain



//includes ()=> kontent ichida bormi yokiligini tekshirib beradi;
console.log(str1.includes('m')); //false



//indexof()=> nechinchi index da turganligini
console.log(str1.indexOf('b')); // 2 (W=0; e=1; 2=b)




//oxirgi indexni chiqaradi

console.log(str2.lastIndexOf('e'));

// substring() =index va length oladi va  kesib beradi
// slice() =index va length oladi va  kesib beradi
console.log(str2.substring(0,5)); //brain
console.log(str1.substring(0,2)); //We
console.log( str1.slice(1,2));
