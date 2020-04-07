// const sayhello=function(){               //declaring the function
// console.log('hello');
// }
// sayhello();                           //calling the function
    
//ARROWS
// const sayhello=()=>{
//     console.log('hello');
// }
// sayhello();

//One line function doesnot need braces
// const sayhello=()=>console.log('hello');
// sayhello()
 
//ONe line return
// const sayhello=()=> 'hello'             //returning hello to return we have console it
// console.log(sayhello());
//return object
// const sayhello=()=>({msf:'hii'});           //passing object in function
// console.log(sayhello());

//passing parameter
// const sayhello=(name)=>console.log(`hii ${name}`);
// sayhello('manish');

//Single parameter doesnot need parenthesis
// const sayhello=name=>console.log(`hii ${name}`);
// sayhello('manish');

//
// const sayhello=(fname,lname)=>console.log(`hii ${fname}${lname}`);
// sayhello('manish','kharel');

// const user=[ 'manish','avishek','prajol']
// const namelength=user.map(function(name){
//     return name.length;
// })

//same process as above but using arrow fn(SHORTER)
// const user=['afaf','daad']
// const namelength=user.map((name)=>{return name.length});
// console.log(namelength);

//SHORTEST
// const user=['sfdf','saf']
// const namelength=user.map(name=>name.length);
// console.log(namelength);


document.getElementById('button1').addEventListener('click',gettext);
document.getElementById('button2').addEventListener('click',getjson);
document.getElementById('button3').addEventListener('click',getexternal);
function gettext(){
    fetch('test.txt').then(response=> response.text())           //fetch promises anything passes on it and to resolve or reject its on our hand
    .then(data=>{
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })  
                            
};
function getjson(){
    fetch('posts.json').then(response=> response.json())           //fetch promises anything passes on it and to resolve or reject its on our hand
    
        //console.log(response);                  //function(respose) gives the response of the fetched file (data.txtt)
        //return response.text();

    .then(data=>{
        console.log(data);
        let output='';
        data.forEach(singledata=>{
             output +=`<li>${singledata.title}`;
             document.getElementById('output').innerHTML=output;
        })
    }).catch(err=>{
        console.log(err);
    })                          
};

function getexternal(){
    fetch('https://api.github.com/users')
    .then(respose=>respose.json())      //fetch promises anything passes on it and to resolve or reject its on our hand
    
        //console.log(response);                  //function(respose) gives the response of the fetched file (data.txtt)
             .then(data=>{
        console.log(data);
        let output='';
        data.forEach(function(user){
             output +=`<li>${user.login}`;              //we are takingthe github users login through github API
        });
             document.getElementById('output').innerHTML=output;
    })
        .catch(err=>console.log(err));
                              
}

