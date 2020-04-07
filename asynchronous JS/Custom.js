const http =new easyHTTP();

// //get posts
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });

// //get single post
    
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post){   //1 is aafed in limk
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

//Create data
const data={
    title:'custom Post',
    body:'This is a custom post'
};
    //create post
 
// http.post('https://jsonplaceholder.typicode.com/posts/',data,function(err,post){
//     if(err){
//         console.log(err);
//             }else{
//                 console.log(post);//
//             }
// });
//UPDATE POST
// http.put('https://jsonplaceholder.typicode.com/posts/7',data,function(err,post){    //while executing  the put we can change the id value accordingly
// if (err){
//     console.log(err);
// }else{
//     console.log(post);
// }
// })

// POST DELETED 
http.delete('https://jsonplaceholder.typicode.com/posts/7',data,function(err,response){    //while executing  the put we can change the id value accordingly
if (err){
    console.log(err);
}else{
    console.log(response);
}
})