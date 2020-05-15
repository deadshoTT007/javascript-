class Store {

    //This function gets medicine array stored in getMedicine
    static getMedicine(){
        let medicines;
        if (localStorage.getItem('medicines') === null) {
            medicines = [];
        } else {
            medicines = JSON.parse(localStorage.getItem('medicines')); //JSON.parse is used to change the string data into object format.
        }
        return medicines;
    }

    //This function is used to get the medicineName.
    static displayMedicineName(){
        const medicines = Store.getMedicine();
        return medicines;
        
    }
    //This function add medicine to localstorage.
    static addMedicine(medicine){

        const medicines = Store.getMedicine();  
        medicines.push(medicine);
        localStorage.setItem('medicines', JSON.stringify(medicines)); //JSON.stringify converts the data in object format into string format.
    }
    //This function updates the current medicine details.
    static updateItemStorage(medicine)
    {
        let medicines = Store.getMedicine('medicines');

        medicines.forEach(function(med, index){
          if(med.ID === medicine.ID){
            medicines.splice(index, 1, medicine);
          }
        });
        localStorage.setItem('medicines', JSON.stringify(medicines));
      }

    //This function deletes the data from the local storage

    static removeItemsFromStorage(id){
        const medicines = Store.getMedicine();
        medicines.forEach(function(medicine, index){
            
            if(medicine.ID === id){
                medicines.splice(index, 1)
                
            }
        });

        localStorage.setItem('medicines', JSON.stringify(medicines));
    }
} 
