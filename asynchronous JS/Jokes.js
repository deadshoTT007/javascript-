/*document.querySelector('.get-jokes').addEventListener('click',getjokes);
function getjokes(e){
    const number=document.querySelector('#number').value;
    console.log(number);
   
const xhr=new XMLHttpRequest();
xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
xhr.onload=function(){
    if(this.status===200){
        const response=JSON.parse(this.responseText);
        console.log(response);
        let output='';
        if(response.type==='success'){                //method depends on how the API is formatted
            response.value.forEach(function(joke){
                output +=`<li>${joke.joke}</li>`;
            });                  //because its an array forEach is used
        }else{
             output +=`<li>Something is wrong</li>`
        }
    
    document.querySelector('.jokes').innerHTML=output;
} 
}
xhr.send();
e.preventDefault();
}
*/
 // SYNCHRONOUS WAY
/*
 const posts=[
     {title:'post 1',body:'this is post 1'},
     {title:'post 2',body:'this is post 2'}
 ];
 function createpost(post){
     setTimeout(function(){
     posts.push(post);
     },2000);
 }
 function getpost(){
     setTimeout(function(){
         let output='';
         posts.forEach(function(post){
             output +=`<li>${post.title}`;
             
         })
         document.body.innerHTML=output;
     },1000);
 }
 createpost({title:'post 3',body:'this is post 3'});
 getpost()

 //ASYNCHRONOUS WAY(CALLBACK FUNCTION IS USED)

 const posts=[
    {title:'post 1',body:'this is post 1'},
    {title:'post 2',body:'this is post 2'}
];
function createpost(post,callback){
    setTimeout(function(){
    posts.push(post);
    callback()
    },2000);   //BEFORE 2 SEC ENDS IT CALL THE getpost() function using callback method
}
function getpost(){
    setTimeout(function(){
        let output='';
        posts.forEach(function(post){
            output +=`<li>${post.title}`;
        });   
  
        document.querySelector('.jokes').innerHTML=output;
    },1000);
    }
        createpost({title:'post 3',body:'this is post 3'},getpost);
    
*/