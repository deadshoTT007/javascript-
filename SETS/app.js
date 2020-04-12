//SETS-atore unique values of any type
const set1=new Set();
//add  values to set
set1.add(100);
set1.add('manish');
set1.add({name:"manish"});
set1.add(true);
console.log(set1);

const set2=new Set([1,'manish',true,{age:18},1.2]);
console.log(set2);
//Size
console.log(set2.size);
//check For Values
console.log(set2.has('manish'));   //true or false
console.log(set2.has(0.5+0.5));
console.log(set1.has({name:"manish"}));   //it is not a primitive type or a refrerence type only the primitive type are stored on stack which can be checked but non-primitive or refrence type are stored on heap
console.log('hello'==='hello');  //true because string is a primitive data type

//delete from sets
set1.delete(100);
console.log(set1);

//Iterating through sets
//for..of
for(let item of set1){    // iitem means everything stored on set1 in for of..mot neccesaty to take item only
    console.log(item);

}

//FOREACH function
set2.forEach((value)=>{
console.log(value);
})
//convert set into array
const setArr=Array.from(set1);
console.log(setArr);