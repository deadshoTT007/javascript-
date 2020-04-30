//Storage Controller
// const StorageCtrl = (function(){

//   //Public Methods
//   return {
//       storeItem: function(item){
//           let items;

//           //Check if any items in LS
//           if(localStorage.getItem('items') === null) {
//               items = [];
//               //Push new item 
//               items.push(item);
//               //Set LS
//               localStorage.setItem('items', JSON.stringify(items));
//           } else {
//               //Get data present in LS
//               items = JSON.parse(localStorage.getItem('items'));

//               //Push the new item
//               items.push(item);

//               //Reset LS
//               localStorage.setItem('items', JSON.stringify(items));
//           }
//       },
//       getItemsFromStorage: function () { 
//           let items;
//           if(localStorage.getItem('items') === null){
//                items = [];
//           } else {
//               items = JSON.parse(localStorage.getItem('items'));
//           }
//           return items;
//        },
//        updateItemStorage: function (updatedItem) {
//           let items = JSON.parse(localStorage.getItem('items'));

//           items.forEach(function(item, index){
//               if(updatedItem.id ===item.id){
//                   items.splice(index, 1, updatedItem);
//               }
//           });
//           localStorage.setItem('items', JSON.stringify(items));
//        },
//        deleteItemFromStorage: function(id) {
//           let items = JSON.parse(localStorage.getItem('items'));

//           items.forEach(function(item, index){
//               if(id ===item.id){
//                   items.splice(index, 1);
//               }
//           });
//           localStorage.setItem('items', JSON.stringify(items));
//        },
//        clearAllItemsFromStorage: function() {
//            localStorage.removeItem('items');
//        }
//   }
// })();

  // Item Controller
  const ItemCtrl = (function(){
    // Item Constructor
    const Item = function(id, name, calories){
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
  
    // Data Structure / State
    const data = {
      items: [
      //   // {id: 0, name: 'Steak Dinner', calories: 1200},
      //   // {id: 1, name: 'Cookie', calories: 400},
      //   // {id: 2, name: 'Eggs', calories: 300}
       ],
     // items:StorageCtrl.getItemsFromStorage(),
       currentItem:null,
       totalCalories:0
    
    }
  
    // Public methods
    return {
      getItems: function(){
        return data.items;
      },
      addItem: function(name, calories){
        let ID;
        // Create ID
        if(data.items.length > 0){
          ID = data.items[data.items.length - 1].id + 1;
        } else {
          ID = 0;
        }
  
        // Calories to number
        calories = parseInt(calories);
  
        // Create new item
        newItem = new Item(ID, name, calories);
  
        // Add to items array
        data.items.push(newItem);
  
        return newItem;
      },
      getItemById:function(id){
          let found=null;
          //Loop through Items
          data.items.forEach(function(item){
              if(item.id===id){
                  found=item;
              }
          });
          return found;

      },
      updateItem: function(name, calories){
        // Calories to number
        calories = parseInt(calories);
  
        let found = null;
  
        data.items.forEach(function(item){
          if(item.id === data.currentItem.id){     //MAtching the id of current data with the id of all  list of item in Data Structure(console) not in UI 
            item.name = name;
            item.calories = calories;
            found = item;
          }
        });
        return found;
    },
    deleteItem:function(id){
      //Get ids
      const ids=data.items.map(function(item){
        return item.id;
      })
      //get index
      const index=ids.indexOf(id);
      //remove item
      data.items.splice(index,1)
    },
    clearAllItems:function(){
      data.items=[]
    },
      setCurrentItem:function(item){
      data.currentItem=item;
      },
      getCurrentItem: function(){
        return data.currentItem;
      },
      getTotalCalories: function(){
        let total = 0;
  
        // Loop through items and add cals
        data.items.forEach(function(item){
          total += item.calories;
        });
  
        // Set total cal in data structure
        data.totalCalories = total;
  
        // Return total
        return data.totalCalories;
      },
      logData: function(){
        return data;
      }
    }
  })();
  
  
  
  // UI Controller
  const UICtrl = (function(){
    const UISelectors = {
      itemList: '#item-list',
      listItems: '#item-list li',
      addBtn: '.add-btn',
      updateBtn: '.update-btn',
      deleteBtn: '.delete-btn',
      backBtn: '.back-btn',
      clearBtn: '.clear-btn',
      itemNameInput: '#item-name',
      itemCaloriesInput: '#item-calories',
      totalCalories: '.total-calories'
    }
    
    // Public methods
    return {
      populateItemList: function(items){
        let html = '';
  
        items.forEach(function(item){
          html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
        });
  
        // Insert list items
        document.querySelector(UISelectors.itemList).innerHTML = html;
      },
      getItemInput: function(){
        return {
          name:document.querySelector(UISelectors.itemNameInput).value,
          calories:document.querySelector(UISelectors.itemCaloriesInput).value
        }
      },
      addListItem:function(item){
        // Show the list
        document.querySelector(UISelectors.itemList).style.display = 'block';
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Add ID
        li.id = `item-${item.id}`;
        // Add HTML
        li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>`;
        // Insert item
        document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
      },
      updateListItem: function(item){
        let listItems = document.querySelectorAll(UISelectors.listItems);
  
        // Turn Node list into array
        listItems = Array.from(listItems);
  
        listItems.forEach(function(listItem){
          const itemID = listItem.getAttribute('id');
    
          if(itemID === `item-${item.id}`){
            document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>`;
          }
        });
      },   
      deleteListItem:function(id){
        const itemID=`#item-${id}`
        const item=document.querySelector(itemID);
        item.remove();
      },

      clearInput: function(){
        document.querySelector(UISelectors.itemNameInput).value = '';
        document.querySelector(UISelectors.itemCaloriesInput).value = '';
      },
      addItemToForm:function(){
document.querySelector(UISelectors.itemNameInput).value=ItemCtrl.getCurrentItem().name;
document.querySelector(UISelectors.itemCaloriesInput).value=ItemCtrl.getCurrentItem().calories;
UICtrl.showEditState();
      },
      removeItems:function(){
        let listItems = document.querySelectorAll(UISelectors.listItems);
  
        // Turn Node list into array
        listItems = Array.from(listItems);
        listItems.forEach(function(listItem){
          listItem.remove();
        })
  
      },
    
      hideList: function(){
        document.querySelector(UISelectors.itemList).style.display = 'none';
      },
      showTotalCalories: function(totalCalories){
        document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
      },
     
      clearEditState: function(){
        UICtrl.clearInput();
        document.querySelector(UISelectors.updateBtn).style.display = 'none';
        document.querySelector(UISelectors.deleteBtn).style.display = 'none';
        document.querySelector(UISelectors.backBtn).style.display = 'none';
        document.querySelector(UISelectors.addBtn).style.display = 'inline';
      },
      showEditState: function(){
       
        document.querySelector(UISelectors.updateBtn).style.display = 'inline';
        document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
        document.querySelector(UISelectors.backBtn).style.display = 'inline';
        document.querySelector(UISelectors.addBtn).style.display = 'none';
      },
    
      getSelectors: function(){
        return UISelectors;
      }
    }
  })();
  
  // App Controller
  const App = (function(ItemCtrl, UICtrl){
    // Load event listeners
    const loadEventListeners = function(){
      // Get UI selectors
      const UISelectors = UICtrl.getSelectors();
  
      // Add item event
      document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
      //Disable submit on enter
      document.addEventListener('keypress',function(e){
        if(e.keyCode===13 || e.which===13){
          e.preventDefault();
          return false;
        }
      })
      //Edit Icon click event
      document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
      //Update item event
      document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);
      //Delete item submit
      document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit);
      //Back item submit
      document.querySelector(UISelectors.backBtn).addEventListener('click',UICtrl.clearEditState);
      //Clear items event
      document.querySelector(UISelectors.clearBtn).addEventListener('click',clearAllItemsClick);
    }
  
    // Add item submit
    const itemAddSubmit = function(e){
      // Get form input from UI Controller
      const input = UICtrl.getItemInput();
  
      // Check for name and calorie input
      if(input.name !== '' && input.calories !== ''){
        // Add item
        const newItem = ItemCtrl.addItem(input.name, input.calories);
  
        // Add item to UI list
        UICtrl.addListItem(newItem);
  
        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);
  //Storage in local Storage
 // StorageCtrl.storeItem(newItem);
       
  
        // Clear fields
        UICtrl.clearInput();
      }
  
      e.preventDefault();
    }
    //click edit item
  const itemEditClick=function(e){
      if(e.target.classList.contains('edit-item')){
          const listId=e.target.parentNode.parentNode.id;
         // console.log(listId);
          const listIdArr=listId.split('-');
          console.log(listIdArr);
          const id=parseInt(listIdArr[1]);
          //console.log(id);
          const itemToEdit=ItemCtrl.getItemById(id);
          // Set current Item
          ItemCtrl.setCurrentItem(itemToEdit);
          //add item to form
          UICtrl.addItemToForm();
      }
      e.preventDefault();
  }
  //Update item submit
  const itemUpdateSubmit=function(e){
//get item input
const input=UICtrl.getItemInput();
const updatedItem=ItemCtrl.updateItem(input.name,input.calories);
UICtrl.updateListItem(updatedItem); //TO put in the DOM or UI 
  // Get total calories
  const totalCalories = ItemCtrl.getTotalCalories();
  // Add total calories to UI
  UICtrl.showTotalCalories(totalCalories);
UICtrl.clearEditState();
e.preventDefault();
}
  const itemDeleteSubmit=function(e){
    const currentItem=ItemCtrl.getCurrentItem();
    //Delete From data Structure
    ItemCtrl.deleteItem(currentItem.id);
    //Delete From UI
UICtrl.deleteListItem(currentItem.id);
 // Get total calories
 const totalCalories = ItemCtrl.getTotalCalories();
 // Add total calories to UI
 UICtrl.showTotalCalories(totalCalories);
//clear edit state for Delete Submit
UICtrl.clearEditState();
    e.preventDefault();
  }
  //clear items ecent
  const clearAllItemsClick=function(){
    //Delete all items fron Data Structure
    ItemCtrl.clearAllItems();
    const totalCalories = ItemCtrl.getTotalCalories();
 // Add total calories to UI
 UICtrl.showTotalCalories(totalCalories);
    //Remove from UI
    UICtrl.removeItems();
    //hide ul
    UICtrl.hideList();
  }
    // Public methods
    return {
      init: function(){
      
     // Clear edit state / set initial set
     UICtrl.clearEditState();
        // Fetch items from data structure
        const items = ItemCtrl.getItems();
        if(items.length === 0){
            UICtrl.hideList();
          } else {
            // Populate list with items
            UICtrl.populateItemList(items);
          }
        
  
        // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);
  
        // Load event listeners
        loadEventListeners();
        //addListItem();
      }
    }
    
  })(ItemCtrl,UICtrl);
  
  // Initialize App
  App.init();


 
 
