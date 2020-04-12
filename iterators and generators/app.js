// //Iterators Example
// function nameIterators(names){
//     let nextIndex=0;
//     return{
//         next:function(){
//             return nextIndex<names.length?     //returns the value unless nextIndex is less than no.of length passed
//             {   value:names[nextIndex++],done:false}:
//             {  done:true  }
//         }
//     }
// }
// const namesArr=['ram','shyam','hari'];     //this array is passed in stored in name variable and passed in the above function
// //init iterator and passin the names array
// const name=nameIterators(namesArr);     //
// console.log(name.next()) ;  //shows the object of ram
// console.log(name.next().value);   //displays ram
// console.log(name.next().value);    //displays shyam
// console.log(name.next());    //displays true
// console.log(name.next().value);     //displayes undefined

// console.log(namesArr);
// console.log(name);

//Generarator ecample
// function* sayNames(){
//     yield 'ram',
//     yield 'shyam',
//     yield 'hari'
// }
// const names=sayNames();
// console.log(names.next().value);   //ram
// console.log(names.next().value);    //shyam
// console.log(names.next().value);    //hari
// console.log(names.next().value);    //undefines

//ID creator
function* createIDs(){
    index=0;

while(true){
    yield index++;
}
}
const ID=createIDs()
console.log(ID);
console.log(ID.next().value);
console.log(ID.next().value);