// const User = function(name){
//     this.name=name;                   //constructor function for User
//     this.chatroom=null;
// }
// User.prototype={
//     send:function(message,to){
//         this.chatroom.send(message,this,to)   //this pretends to the user

//     },
//     receive:function(message,from){

//         console.log(`${from.name} to ${this.name}:${message}`);
//     }
// }
// const Chatroom=function(){
//     let users={};    //list of users
//     return{
//         register:function(user){
//             users[user.name]=user;                                 //{[user.name]as a key
//             user.chatroom=this;
//         },
//         send:function(message,from,to){
//             if(to){
//                 //single user message
//              to.receive(message,from);
//             }else{
//                  //loop through all the user
//                  for(key in users){
//                      if(users[key]!==from){
//                          users[key].recieve(message,from);
//                      }
//                  }
//             }
//         }

//     }
// }
// const manish=new User('manish')
// const avishek=new User('avishek')
// const suman=new User('suman')
// const chatroom=new Chatroom();
// chatroom.register(manish);
// chatroom.register(avishek);
// chatroom.register(suman);
// manish.send('hello suman',suman);
// avishek.send('hello suman',suman);
// manish.send('hello suman',avishek);
// manish.send('hello suman');

const User = function(name) {
    this.name = name;
    this.chatroom = null;
  }
  
  User.prototype = {
    send: function(message, to) {
      this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
    }
  }
  
  const Chatroom = function() {
    let users = {}; // list of users
  
    return {
      register: function(user) {
        users[user.name] = user;
        user.chatroom = this;
      },
      send: function(message, from, to) {
        if(to) {
          // Single user message
          to.recieve(message, from);
        } else {
          // Mass message
          for(key in users) {
            if(users[key] !== from) {
              users[key].recieve(message, from);
            }
          }
        }
      }
    }
  }
  
  const manish=new User('manish')
const avishek=new User('avishek')
const suman=new User('suman')
const chatroom=new Chatroom();
chatroom.register(manish);
chatroom.register(avishek);
chatroom.register(suman);
manish.send('hello suman',suman);
avishek.send('hello suman',suman);
manish.send('hello suman',avishek);
manish.send('hello suman');