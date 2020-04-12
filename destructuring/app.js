let a,b;
//FOR ARRAYS
[a,b]=[100,200]
console.log(a,b);
//REST PATTERMS
[a,b,c,...rest]=[100,200,300,400,500,600]
console.log(a,b,c);
console.log(rest);
console.log(a,b,c,rest);
//FOR OBJECTS
({a,b,...rest}={a:1,b:2,c:3,d:4,e:5,f:6});    //... measns the rest (others) left 
console.log(a,b);
console.log(rest);
//ARRAY destructuring
const people=['ram','shyam','hari'];
const[person1,person2,person3]=people;   //which means const[person1,person2,person3]=['ram','shyam','hari'];
console.log(person1,person2,person3);

function getPeople(){
    return ['ram','hari','shyam']
}
[p1,p2,p3]=getPeople();
console.log(p1,p2,p3);

//OBJECT DESTRUCTURING
const person={
    name:'manish',
    age:19,
    gender:'male',
    sayhii:function(){
       console.log('hii');
    }
}
//OLD ES5
// const name=person.name,
// age=person.age,
// gender=person.gender
// console.log(name,age,gender);

//MORE EFFECTIVE WAY
const{name,age,gender,sayhii}=person;
console.log(name,age,gender);
sayhii();
