var todo=["sff"];
var input=prompt('what do you want to to');
while(input !=='quit'){ 
    input=prompt('what do you want to to');

if(input==="list"){
listtodo();
}else if(input==='new'){
  newtodo();
}else if(input==="delete"){
    deleted();
}

};


function listtodo(){
    todo.forEach(function(every,ind){      //first parameter of for eachh is for item and second is for index value
    console.log(ind + " :" + every );
    console.log("listr of item")
    })
}
function newtodo(){
    var newlist=prompt("what to add");
    todo.push(newlist);
    console.log("ad a new list");
}
function deleted(){
    var delet=prompt("what do you want to delete")
    todo.splice(delet,1);
    console.log('deleted item');
}