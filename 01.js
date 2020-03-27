
//variables declarations
let a = 5;
let b = 23;
let sum = a+b;
document.write(sum);
console.log(sum);
const pi = 3.14;
let r = 45;
let area = pi*r*r;
document.write(area.toFixed(2));
document.write("<br>");
let fname= "manish";
let lname= "kharel";

document.write(fname + " "+ lname);
document.write("<br>");
//conditions
let myage= 19;
if(myage>18)
{
    document.write("i am voter");
}else if(myage==18)
{
    document.write("i am 18 years old");

}else{
    alert("i am not eligible for voting");
}
//looping
//for loop
for(i=0;i<=5;i++){
document.write("<br>"+"manish kharel",i);
}
/*while loop
let a=0;
while(a<5)
{
    document.write(a);
    a++;
}

let a=0;
do{
    document.write("kharel");
    a++;
    
}while(a<5);
*/

//array
let student = ["ram","syham","hari","kharel","falano"];
console.log(student);
document.write(student);
//document.write(student[3]);
document.write("<br>");
//student.forEach(function(abd){document.write(abd + " "+ "<br>")})
student.shift();//eutta name ki value hatauxa(shift) garxa..
document.write("<br>");
//student.forEach(function(abd){document.write(abd + " "+ "<br>")})
student.unshift("hero");//keii kura first ma thapnu paryo vane unshift use hnxa..
document.write("<br>");
//student.forEach(function(abd){document.write(abd + " "+ "<br>")})
student.pop();
document.write("<br>");
//student.forEach(function(abd){document.write(abd + "<br>")})//pop le chahi last ko value hatauxa

//push le chahi last bata value halxa same process as pop..
student.splice(1,3,"dahal");
document.write("<br>");
//student.forEach(function(abd){document.write(abd + "<br>")})
function nameA()
{
   document.getElementById("namee").innerHTML= "manish";
}
function simpleInterest()
{
    let principle= document.getElementById('p').value;
    let time= document.getElementById('t').value;
    let rate= document.getElementById('r').value;
    let si= principle*time*rate/100;
    document.getElementById('Se').innerHTML = si;
}
/*let person ={
    fname:"manish",
    lname: "kharel",
    age: 18,
    fullname = function()
   { 
       return this.fname +" "+ this.lname;
   }};
   document.write(person.fullname()); 
*/ 