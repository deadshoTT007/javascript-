document.write('i am external javascript'); 

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
/*let id=5;
if(id==5){
    console.log('correct');
}else{
    console.log('incoreect');
}
if(id!=5){
    console.log('carrect');
}else{
    console.log('incorrect');
} // this == sign only cheks the value but not the type ..for to check the both value and type we use the === sign..

if(id){
    console.log(`the ID is ${id}`);
}else{
    console.log('no id');
}

//test if defined or not or test if undefined
if(typeof id!=="undefined"){
    console.log('no id')
}else{
    console.log(`the ID id ${id}`);
}

//if else
let idd=200;
if(idd>200){
    console.log('true');
}else{
    console.log('false');
}
let game='tabletennis';
if(game=='tabletennis'){
    console.log('game is tt');
}else if(game=='football'){
    console.log('game is football')
}
let name='manish';
//and case
age=19;
if(age>0 && age<12){
    console.log(`${name} is a child`);
}else if(age>12 && age<18){
    console.log(`${name} is a tenneager`);
}else{
    console.log(`${name} is a adult`)
}
//or case
if(age<16 || age>60){
    console.log(`${name} is not eligible for smoking`);
}else{
    console.log(`${name} is elibile for smoking`);
}
//yernary case
console.log( age===100 ? 'correct' : 'incorrect');
//switch case
let color='green';
switch(color){
    case 'green':
        console.log('the color is green')
        break;
        case 'blue':
            console.log('the color is blue');
            break;
            default:
                console.log('the color are not green and blue');
                brerak;
} let day;
switch(new Date().getDay()){
case 0:
    day='sunday';
    break;
    case 1:
        day='monday';
        break;
        case 2:
            day='tuesday';
            break;
            case 3:
                day='wednusday';
                break;
                case 4:
                    day='thursday';
                    break;
                    case 5:
                        day='friday';
                        break;
                        case 6:
                            day='saturday';
                            break;
}
console.log(day);


//FUNCTIONS
function namee(){    //SIMPLE FUNCTION
return 'hello'
} 
console.log(namee());
 
function name(fname,lname){    //PARAMETERIZED FUNCTION
    return 'my name is' + fname +' '+lname;
}
console.log(name('manish','kharel'));

function namee(firstname='manish',lastname='kharel'){     //DEFAULT FUNCTION
    return 'my name is '+firstname+ ' '+lastname;
}
console.log(namee());

function nam(Fname,Lname){      //IN THE  UNDEFINED CASE OF PARAMETER WE DEFINE IT USING UNDEFINED
    if(typeof Fname==='undefined'){
        Fname='manish';
    }
    if(typeof Lname==='undefined'){
        Lname='kharel';
    }
    return 'my name is' + Fname +' ' +Lname;
}
console.log(nam());

let square=function(a){    //parameterized
    return a*a;
}  
console.log(square(5));

let squaree=function(a=7){    // DEFAULT FUNCTION
    return a*a;
}  
console.log(squaree());

(function(){                 //IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS- IIFEs
    console.log('hii');
});            

(function (named){
    console.log('heloo' + named);
})('everyone');

//PROPERTY METHOD

let add={
    addmore:function(){
        console.log('add more...');      // inside a object we should put a semicolon(,) while making a function
    },
    edit: function(value){
        console.log(`edit addmore ${value}`);
    }
}
add.delete=function(){
    console.log('delete');
}
add.addmore();
add.edit(10);
add.delete();


//FOR LOOP

 for(i=0;i<10;i++){
     if(i===5){
         console.log('no.5 is my fav no');
         continue;
    }
    console.log('numbers'+ i);
    if(i===7){
        console.log('stop');
        break;
    }
 }
//WHILE LOOP

let i=1;
while(i<=10){
    console.log('no.' + i);
    i++;
}


//DO WHILE LOOP
let i=1;
do{
    console.log('no. are' + i);
    i++;
}while(i<=10);

//FOR EACH FUNTION
let players=['malong','zhangjike','fanzhendong','xuxin']
//for(i=0;i<players.length;i++){                         
  //  console.log('ma fav player is'+ players[i]);}

  players.forEach(function(){      //IT STORES THE CONTENT OF AN ARRAY WITHOUT USING ANY LOOP
      console.log(players);
  });
  let rank=[
      {no:'world no.1 ',name:'malong'},
      {no:'world no.2 ',name:'fanzhendong'},
      {no:'world no.3 ',name:'zhangjike'},
      {no:'world no.4 ',name:'xuxin'},
  ];
  let show=rank.map(function(top){    //MAP: MAPPES THE OBJECT INSIDE IN AN AARAY TO ANY OTHER VARIABLE
     return top.no + top.name;
  });
  console.log(show);
  
  let player=['malong','zhangjike','fanzhendong','harimoto']
  player.forEach(function(index,name){
      console.log(`${index}:${name}`);
  })

  let user={
      id1:1,fname:'malong',
      id2:2,name:' zhangjike'
      
  }
  for(let x in user){
    console.log(x);       //x only gives the key
}
  for(let x in user){
      console.log(`${x}:${user[x]}`);   //whereas to display both the key and value template is used(``)
  }
  

  //PROMPT 
  let safety=prompt();
  alert(safety);
  if(confirm('are you sure')){
      console.log('yes');
  }else{
      console.log('no');
  }
  */
  let x;
  x=window.outerHeight;
  x=window.outerWidth;
  x=window.innerHeight;     //INNER BAND OUTER HEIGHTS AND WIDTHS
  x=window.innerWidth;
  

  x=window.scrollX;      //SCROLL POINTS
  x=window.scrollY;
  
  x=window.location;     //LOCATION     
  x=window.location.hostname;
  x=window.location.href;
  x=window.location.port;   
  x=window.location.search;

  //window.location.href='http://google.com';   //REDIRECT

  x=window.location.reload();   //RELOAD

x=window.history.length();   //history object  //ex:window.history.length(-3);

x=window.navigator;
x=window.navigator.appName;
x=window.navigator.appVersion;               //NAVIGATOR OBJECTS
x=window.navigator.userAgent;
x=window.navigator.platform;//and many more

  console.log(x);