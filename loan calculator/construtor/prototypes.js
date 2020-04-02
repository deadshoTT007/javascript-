//object prototype
//person prototype

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
Person.prototype.calculatedage= function(){
    const diff=Date.now()-this.DOB.getTime();
    const age=new Date(diff);
    return Math.abs( age.getUTCFullYear()-1970);
}
const manish=new Birth('Manish','kharel','8-1-2000');
const avishek=new Birth('Avishek','Dahal','april 1 2000');
console.log(manish.calculatedage());
console.log(avishek.calculatedage());