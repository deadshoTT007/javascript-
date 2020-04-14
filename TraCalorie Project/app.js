//Storage Controller

//Item Controller
const ItemCtrl=(function(){
//Item Constructor
const Item=function(id,name,calories){
    this.id=id;
    this.name=name;
    this.calories=calories;
    
}
//Data Structure /state
const data={
    items:[
    // {id: 0, name: 'Steak Dinner', calories: 1200},
    //  {id: 1, name: 'Cookie', calories: 400},
    //  {id: 2, name: 'Eggs', calories: 300},
    ],
    currentItem:null,
    totalCalories:0
}
//When we return something from the module its called public nethod
return{
    getItems:function(){
     return data.items;
    },
    addItem:function(name,calories){
     let ID;
     //Create ID
     if(data.items.length>0){
       ID=data.items[data.items.length-1].id+1;
     }else{
         ID=0;
     }
     calories=parseInt(calories);
     //create new Item
     newItem=new Item(ID,name,calories);
     //add to item array
     data.items.push(newItem);
     return newItem;
    },
    //GEt Total calories
    getTotalCalories:function(){
        let total=0;
        //loop through items and add cals 
        data.items.forEach((function(item){
            total+=item.calories;
        }));
        //Set total cal in data structure
        data.totalCalories=total;
        //return total
        return data.totalCalories;
    },
    logData:function(){
        return data;
    }

}
})();

//UI controller
const UICtrl=(function(){
    const UISelectors={
        itemList:'#item-list',
        addbtn:'.add-btn',
        updatebtn:'.update-btn',
        deletebtn:'.delete-btn',
        backbtn:'.back-btn',
        itemNameInput:'#item-name',
       itemCaloriesInput:'#item-calories',
       totalCalories:'.total-calories'
    }
//Public Method
return{
    populateItemList:function(items){
    let html='';
    items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });
      document.querySelector(UISelectors.itemList).innerHTML=html;
    },
    getItemInput:function(){
 return{
     name:document.querySelector(UISelectors.itemNameInput).value,
     calories:document.querySelector(UISelectors.itemCaloriesInput).value
 }
    },
    addListItem:function(item){
        //Create li Element
        const li=document.createElement('li');
        //add class
        li.className='collection-item';
        //add ID
        li.id=`item-${item.id}`
        //add Html
        li.innerHTML= `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend',li)
        
    },
    clearInput:function(){
        document.querySelector(UISelectors.itemNameInput).value='';
        document.querySelector(UISelectors.itemCaloriesInput).value='';
    },
    showTotalCalories:function(totalCalories){ 
document.querySelector(UISelectors.totalCalories).textContent=totalCalories;
//console.log(showTotalCalories());

    },
    clearEditState:function(){
        UICtrl.clearInput();
        document.querySelector(UISelectors.updatebtn).style.display='none';
        document.querySelector(UISelectors.deletebtn).style.display='none';
        document.querySelector(UISelectors.backbtn).style.display='none';
        document.querySelector(UISelectors.addbtn).style.display='inline';
    },
    getSelectors:function(){
        return UISelectors;
    }
}
})();
const App=(function(ItemCtrl,UICtrl){
    //Load EventLIsteners
    const loadEventListeners=function(){
        //Get UI selectors
const UISelectors=UICtrl.getSelectors();
//add item event
document.querySelector(UISelectors.addbtn).addEventListener('click',itemAddSubmit);
    }
    document.querySelector(UISelectors.itemList).addEventListener('click', itemUpdateSubmit);

const itemAddSubmit=function(e){
    //get inpuit from the UI controller
    const input=UICtrl.getItemInput();
    //check for name and calories
    if(input.name!=='' && input.calories!==''){
    const newItem=ItemCtrl.addItem(input.name,input.calories);
    //ADD Item to UI list
    UICtrl.addListItem(newItem);
    //GEt total calories
    const totalCalories=ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);
    
}
UICtrl.clearInput();
    
    e.preventDefault();
}
 const itemUpdateSubmit=function(e){
     if(e.target.classList.contains('.edit-item')){
         console.log('edit');
         e.preventDefault();
     }
 }

    
//Public Method
return{
    init:function(){
        //Clear Edit State/set Initial state
        UICtrl.clearEditState();
        
        //Fetch item from data structure
        const items=ItemCtrl.getItems();
        console.log(items);
        UICtrl.populateItemList(items);
        loadEventListeners();
    }
}

})(ItemCtrl,UICtrl);
App.init();