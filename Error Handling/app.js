// // try{
// //     //myfunction();   //thhis is reference error cause the called function has nothing to show
// //     //produce a TypeError
// //     //null.myfunction();   //this is TypeError cause null doesnot return anything
// //     // Produce a SyntaxError
// //     //eval('hello');
// //     //WIll produce a URL Error
// //     decodeURIComponent('%');

// // }catch(e){
// //     console.log(e);           
// //     //console.log(e.message);   //shows message
// //     //console.log(e.name);        //name of error
// //   //  console.log(e instanceof ReferenceError); //since its a reference it will show true

// // }finally{
// //     console.log('finally runs regardless of the error and shows result')
// // }
// // console.log('Program Continues....')

// //Creating an Own Error
// // const user={
// //     email:'kharemlanish2@gmail.com'
// // }
// // try{
// //     if(!user.name){
// //         throw new SyntaxError('User have no Name');
// //     }
// // }catch(e){
// //     console.log(`User Error:${e.message}`);
// // }

// //Regular Expression
// // let re;
// // re=/hello/;
// // re=/HelLO/i; //i= case sensitive
// //re=/hello/g;  //g=globalsearch
// // console.log(re);  // /hello/
// // console.log(re.source);  // hello

// // //exec()-Return result in an array or null
// // const result=re.exec('hello world');       //if 'hello world' matches with the real expression /hello/ then it is stored in array
// // console.log(result[0]);   //it shows first value of the array
// // console.log(result);          //it stores the resily as aaray if matched
// // console.log(result.index);

// //test()-return true or false
// // const result=re.test('Hello');  //it shows false because it is case sensitive
// // console.log(result);

// //match()- return result array or null
// // const str='hello there';
// // const result=str.match(re);               //basically same as exec stires the data in array if found else shows 
// // console.log(result);

// //search()-returns index of the first match if not found returns -1
// //const str='hello there';       //index shows 0 because h is matched of hello in 0 position of str
// // const str='so hello there';      // hello ko h is matched in index 3
// // const result=str.search(re);
// // console.log(result);

// //string to match
// let re;
// //literal character
// re=/hello/;
// re=/hello/i;  //i=case insensitive

//Metacharacter Symbols
re=/^h/i;    //must start with h
re=/d$/i;    //must end with d
re=/world$/i; // this also matches
re=/^hello$/i;  //must start with and end with  (to natch  it must begin from hello and end with hello)
re=/h.llo/i;    //matches any one character
re=/h*llo/i;      //Matches any character 0 or more times
re=/gre?a?y/i;    //optional character
re=/gre?a?y\?/i;    //escaping character

// Brackets [] character sets
re = /gr[ae]y/i; // must be a or e
re = /[GF]ray/; // must be G or F
re = /[^GF]ray/; // Match except G or F
re = /[A-Z]ray/; // Match any uppercase character between A-Z  
re = /[a-zA-Z]ray/; // Match any character between a-z or A-Z
re = /[0-9]ray/; // Match any digit between

// Braces {} -Quantifier
re = /hel{2}o/i; // must occur exactly {m} times
re = /hel{2,4}o/i; // must occur exactly between {n,m} times
re = /hel{2,}o/i; // must occur atleast between {m,} times

// parethesis () -grouping
re = /([0-9]x){3}/; // Grouping [0-9]x 

// shorthand character classes
re = /\w/; // Word character - alphanumeric
re = /\w+/; // + 1 or more character
re = /\W/; // non-word character
re = /\d/; // match any digit 
re = /\d+/; // match any digit 0 or more times
re = /\D/; // match any non-digit
re = /\s/; // match white space character
re = /\S/; // match white non-space character
re = /hell\b/i; // world boundary

// assertion
re = /x(?=y)/; // match x only if its followed by y
re = /x(?!y)/; // match x only if its not-followed by y


// strring to match
const str = 'xsdksdk';
//log results
const result=re.exec(str);
console.log(result);

function reTest(re,str){
    if(re.test(str)===true){          //===true is not neccessary
        console.log(`${str} matches ${re.source}`)
    }else{
        console.log(`${str} does not match ${re.source}`)
    }
}
reTest(re,str);
