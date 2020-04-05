 //object prototype
//person prototype
/*
function Birth(fname,lname,birthdate){
    this.Fname=fname;
    this.Lname=lname;
    this.DOB=new Date(birthdate);
    // this.calculatedage=function(){
    //     const diff=Date.now()-this.DOB.getTime();
    //     const age=new Date(diff);
    //     return Math.abs( age.getUTCFullYear()-1970);
    //}
}

Birth.prototype.calculatedage= function(){
    const diff=Date.now()-this.DOB.getTime();
    const age=new Date(diff);
    return Math.abs( age.getUTCFullYear()-1970);
}
Birth.prototype.getfullname=function(){
    return`${this.Fname} ${this.Lname}`;
}
Birth.prototype.getmarried=function(Newlastname){
    this.Lname=Newlastname;
}
const manish=new Birth('Manish','kharel','8-1-2000');
const avishek=new Birth('Avishek','Dahal','april 1 2000');
console.log(manish);
console.log(manish.calculatedage());
console.log(avishek.calculatedage());
console.log(manish.getfullname());
avishek.getmarried('karki');
console.log(avishek.getfullname());

function Name(fname,lname){
    this.Fname=fname;
    this.Lname=lname;
}
Name.prototype.greet=function(){
    return` helle there ${this.Fname} ${this.Lname}`;
}
const showname=new Name('manish','kharel');
console.log(showname);              //this shows the value with object                
console.log(showname.greet());

//customer constructor
function customer(fname,lname,mob,ID){
    Name.call(this,fname,lname);
    this.Mob=mob;
    this.Id=ID;
} 
//inherit the person prototype methods
customer.prototype=Object.create(Name.prototype)   //if we donot do this then we cannot inherit the constructor of Name from the customer
//make customer.prototype retutm customer
customer.prototype.constructor=customer;
const customer1=new customer('bibash','giri',555,222);
console.log(customer1);
console.log(customer1.greet());
customer.prototype.greet=function(){
    return` helle there ${this.Fname} ${this.Lname} welcome to the gang` ;
}
console.log(customer1.greet());


//OBJECT CREATE

 const personprototype={
     greet:function(){
         return` hello ${this.fname} ${this.lname}`;
     },
     getmarried: function(newlastname){
      this.lname=newlastname;
      
     },
 }
 const man=Object.create(personprototype);
 man.fname='maish';
 man.lname='kharel';
 man.age=19;
 man.getmarried('karki');
 console.log(man);
 console.log(man.greet());

 const hero=Object.create(personprototype,{
     fname:{value:'avishek'},
     lname:{value:'dahal'},
     age:{value:19},
 });
 console.log(hero);
console.log(hero.greet());


//ES6
class Person{
    constructor(fname,lname,dob){
        this.Fname=fname;
        this.Lname=lname;
        this.Age=new Date(dob)
    }
    greet(){
        return`hello Mr. ${this.Fname} ${this.Lname}`;
    }
    calculateage(){
        const diff=Date.now()-this.Age.getTime();
        const agedata=new Date(diff);
        return Math.abs(agedata.getUTCFullYear()-1970);
    }
    getmarried(newlastname){
        this.Lname=newlastname;
    }
    static addnumbers(x,y){
        return x+y;
    }
}
const me=new Person('manish','kharel','8-1-2000');
console.log(me);
//console.log(me.greet());
console.log(me.calculateage());
me.getmarried('karki');
console.log(me);
console.log(me.greet());
console.log(Person.addnumbers(1,2));
*/

//SUB CLASSES

class Person{
    constructor(fname,lname){
        this.Fname=fname;
        this.Lname=lname;
    }
    greet(){
        return`hello Mr ${this.Fname} ${this.Lname}`;
    }
    
}
class customer extends Person{
constructor(fname,lname,mob,ID){
    super(fname,lname);
    this.Mob=mob;
    this.id=ID;
}
static getIDcost(){
    return 15000;
}
}
const me=new Person('manish','kharel');
const ME=new customer('manish','hero','9810192156','5555');
console.log(ME);
console.log(me);
console.log(me.greet());
console.log(customer.getIDcost());