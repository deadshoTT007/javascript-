//MAPS = key-value pairs -can use any type as a key or value

const map1=new Map();
//set Keys
const key1='Some string'
 key2={},
 key3=function(){};
//set map values by key
map1.set(key1,'value of key1')
map1.set(key2,'value of key2')   //this means the 'value of key1' string is stored or set in key1
map1.set(key3,'value of key3')

//Get values by key

// console.log(map1.get(key1),map1.get(key2),map1.get(key3));          //get value of key1,key2,key3
// console.log(map1.size);

//loop using for...of to get keys and values
for(let[key,value] of map1){
    console.log(`${key}:${value}`);
}

//iterate keys only
for(let key of map1.keys()){      //since there are 3 keys keys are used 
    console.log(key);
}
for(let value of map1.values()){
    console.log(value);
}

//loop with forEach
map1.forEach((value,key)=>{
    console.log(`${key}:${value}`)
})

//convert to arrays

//create an array of the key value pairs
const keyValArr = Array.from(map1)               //Array.form is used to change into array
console.log(keyValArr);

//create an array of the key  
const keyArr = Array.from(map1.keys())               //Array.form is used to change into array
console.log(keyArr);

//create an array of the  value 
const ValArr = Array.from(map1.values())               //Array.form is used to change into array
console.log(ValArr);