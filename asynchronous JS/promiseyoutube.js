
// let promisetocleantheroom=new Promise(function(resolve,reject){   ////promise takes a callback fn in which two parameters is passes (resolve and reject)

// //cleaning the toom
// let roomisclean=true;    //if false then it calls reject()                     
// if(roomisclean){
//     resolve('cleanedtheroom');
// }else{
//     reject('notcleaned');
// }
// });
// promisetocleantheroom.then(function(getresolve){    //this function calls the resolve() function which basially means the promise if fulfilled or resolved
//        console.log("I have" + getresolve);                                    // this function shows the value of the resolve fn if parameter is passed on resolve fn 
// }).catch(function(getreject){
//     console.log(getreject);
// })                                                             

let cleanedroom= function(){
    return new Promise(function(resolve,reject){
        resolve( 'cleaned the room');
    });
};
let removegarbage= function(message){                
    return new Promise(function(resolve,reject){
        resolve(message+ 'removed the garbage');      //concatinate each messages fulfilling from the each promisses
    });
};
let winicecream= function(message){
    return new Promise(function(resolve,reject){
        resolve(message+ 'and winned the icecream');
    });
};
cleanedroom().then(function(result){
    return removegarbage(result);
}).then(function(result){
    return winicecream(result);
}).then(function(result){
    console.log('finished'+result);
})

// //for all
// Promise.all([cleanedroom(),removegarbage(),winicecream()]).then(function(){
//     console.log('finished')
// })