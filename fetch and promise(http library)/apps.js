const http=new EasyHTTP;

//get users
// http.get('https://jsonplaceholder.typicode.com/users');
// console.log(users);        //synchronous way////it justr returns the promise not the data
//so we do rthis in a ayanchronous way

// http.get('https://jsonplaceholder.typicode.com/users')
//  .then(data=>console.log(data))
//  .catch(err=>console.log(err));

//create data
const data={
    name:'manish kharel',
    email:'kharelmnaish2@gmail.com'
}
// CREATE USER
// http.post('https://jsonplaceholder.typicode.com/users',data)
//  .then(data=>console.log(data))
//  .catch(err=>console.log(err));

//Update post
//  http.put('https://jsonplaceholder.typicode.com/users/2',data)
//  .then(data=>console.log(data))
//  .catch(err=>console.log(err));
//DELETE USER
http.put('https://jsonplaceholder.typicode.com/users/2',)
 .then(data=>console.log('resource deleted'))
 .catch(err=>console.log(err));
