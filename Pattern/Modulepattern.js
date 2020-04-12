// //Basic structure

// // (function(){
// //     //Declare private vars and function
// //     return{
// //         //Declare public var and functions
// //     }
// // })();


//  const UICtrl = (function() {
//       let text = 'Hello World';
    
//       const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//       }
    
//       return {
//         callChangeText: function() {
//           changeText();                      ///we need to a fuction declared in return part to return the private functions 
//           // console.log(text);
//         }
//       }
//     })();
    
//     UICtrl.callChangeText();
//     // UICtrl.changeText();     //cammot be accessed outside of the class

const ItemCtrl=(function(){
let data=[];
function add(item){
    data.push(item);
    console.log("item iss added")
}
function get(Id){
    return data.find(Item=>{
        return Item.Id===Id;
    });
}
return{
    add,
    get
}

}());
ItemCtrl.add({Id:2,name:'john'});
console.log(ItemCtrl.get(2));