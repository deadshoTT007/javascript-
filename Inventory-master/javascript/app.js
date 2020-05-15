//Medicine class defines the properties that we will be using throughout the project
class Medicine {
  constructor(ID, name, medicinetype, image, image_base64, quantity) {
    this.ID = ID;
    this.name = name;
    this.medicinetype = medicinetype;
    this.image = image;
    this.image_base64 = image_base64;
    this.quantity = quantity;
  }
}

// Add event listerner
document.getElementById("add-item").addEventListener('click', addItemInInventory);
document.getElementById("updated-item").addEventListener('click', updateItemInInventory);
document.getElementById('medicine-list').addEventListener('click', displayDetails);
document.getElementById("delete-item").addEventListener('click', deleteItem);

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', displayList);

// function to add item in storage
//This is the arrow function
function addItemInInventory (e){
    const name =  document.getElementById('medicine-name').value;
    const medicinetype = document.getElementById('medicine-type').value;
    const image = document.getElementById('medicine-image').value;
    const image_base64 = document.getElementById('medicine-image-base64').src;
    
    // const reg = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$");
    // if(!reg(image_based64.src)){
    //     alert("This extension cannot be taken");
    // }
    // else
    // return true;

    const quantity = document.getElementById('medicine-quantity').value;
    const data = Store.getMedicine();

    


    let ID;
      //Create ID
      if (data.length > 0) {
          ID = data[data.length - 1].ID + 1;
      } else {
          ID = 0;
      }
    
    if (name === '' || medicinetype === '' || quantity === '') {
      alert('Please fill all fields');
    } else {
      //instatiating medicine class
      const medicine = new Medicine(ID, name, medicinetype, image,image_base64, quantity);
      Store.addMedicine(medicine);
     
      // passing medicine
      displayList();
      // clear fields
      clearFields();
    }
    // Prevent default
    e.preventDefault();
}

// clear fields it is an arrow function
const clearFields = () => {
  document.getElementById('medicine-name').value = '';
  document.getElementById('medicine-type').value = '';
  document.getElementById('medicine-image').value = '';
  document.getElementById('medicine-quantity').value = '';
  document.getElementById('medicine-image-base64').src='';
}

// Function to display list items
function displayList() {
  document.getElementById('medicine-list').innerHTML = '';
  UI.displayItemName();
}

// Function to display list items
function displayDetails (e) {
  UI.displayItemsDetails(e);
}


// Update items
function updateItemInInventory() { 
  const ID = document.getElementById('medicine-update-id').value;
  const name =  document.getElementById('medicine-update-name').value;
  const medicinetype = document.getElementById('medicine-update-type').value;
  const image = document.getElementById('medicine-update-image').value;
  const image_base64 = document.getElementById('medicine-update-image-base64').src;
  const quantity = document.getElementById('medicine-update-quantity').value;
  const medicine = new Medicine(Number(ID), name, medicinetype, image, image_base64, quantity);
  Store.updateItemStorage(medicine);

  // display update list
  displayList();
}

//delete items.
function deleteItem(e) {
  e.preventDefault();
  
  const id = e.target.dataset.id;
  Store.removeItemsFromStorage(Number(id));

  // display update list
  displayList();
}