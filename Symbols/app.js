const sym1=Symbol();
const sym2=Symbol('sym2');
console.log(sym2);
console.log(typeof sym2);  //it displays symbol which is a primitive type data value because it doesmot return ant object
//console.log(`hello ${sym2}`);  //TypeError because symbol value connot be converted into string
console.log(`hello${String(sym2)}`);   //we can use String method to add a string in a symbol

//unique obhext key

const key1=Symbol();
const key2=Symbol();
const myobj={ };
myobj[key1]='prop1';
myobj[key2]='prop2';
myobj.key3='porp3';
myobj.key4='prop4';
myobj.key5='prop5';
//console.log(myobj[key1]);
//console.log(myobj[key2]);

//symbols are not enumerable in for..in
for(let i in myobj){
    console.log(`${i}:${myobj[i]}`);  //only the regular properties are showing in the console because symbols are not enumerable in for in

}
//Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key:"prop"}));   // displays {"key":"prop"}
console.log(JSON.stringify({[Symbol('sym1')]:"prop"}));  //displays {} (empty object) which means it doesnot parse JSON.stringify as done above
   
