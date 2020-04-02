function person(){
    this.name='manish';
}
const mee=new person();
console.log(mee);
////////////////////////////////////////////
function Person(name,age){
    this.Name=name;
    this.Age=age;
    console.log(this);   //if we console this we dont have to declare the object outside the constructor
}
//console,log(this);      if we console this outside the function or if we declare it globally then we get the window object 
const me=new Person('manish',19);
const you=new Person('falano',20);
//console.log(me.age);     // it gaves the age of manish only
// console.log(me); 
// console.log(you);

function Birth(name,birthdate){
    this.name=name;
    this.DOB=new Date(birthdate);
    this.calculatedage=function(){
        const diff=Date.now()-this.DOB.getTime();
        const age=new Date(diff);
        return Math.abs( age.getUTCFullYear()-1970);
    }
}
const birth=new Birth('manish','8-1-2000');
console.log(birth.calculatedage());