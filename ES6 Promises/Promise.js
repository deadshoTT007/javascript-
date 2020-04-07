
const posts=[
   {title:'post 1',body:'this is post 1'},
   {title:'post 2',body:'this is post 2'}
];
function createpost(post){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
        posts.push(post);
         const error=true;
         if(!error){
             resolve();
         }else{
        reject('error');
         }
        },2000);   //BEFORE 2 SEC ENDS IT CALL THE getpost() function using callback method
     });
    }
function getpost(){
   setTimeout(function(){
       let output='';
       posts.forEach(function(post){
           output +=`<li>${post.title}`;
       });   
 
       document.body.innerHTML=output;
   },1000);
   }

createpost({title:'post 3',body:'this is post 1'})
.then(getpost)
.catch(function(err){
    console.log(err);
});
       