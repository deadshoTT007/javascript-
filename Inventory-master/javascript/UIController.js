class UI{

    //displayItemName function basically creates a list and display
    static displayItemName() {
        
       const medicineName = Store.displayMedicineName();
        medicineName.forEach(element => {
            
            //Add medicine name in list and image
            const list = document.getElementById('medicine-list');
            // create li and img tag
            const li = document.createElement('li');
            const img = document.createElement('img');

            // add src in image
            img.src = `${element.image_base64}`;
            img.className = 'list-image';

            //Add class
            li.className = 'list-group-item list-medicine';
            li.setAttribute("data-toggle", "modal");
            li.setAttribute("data-target", "#list-modal");

            //Create text node and append to li
            li.appendChild(document.createTextNode(element.name));
            // append child in li
            li.appendChild(img);
            //Append the li to ul
            list.appendChild(li); 
        });
        
    }

    //This function displays the medicine details
    static displayItemsDetails(e) {

        const medicineName = e.target.firstChild.nodeValue;
        const items = Store.displayMedicineName();
   
        items.forEach((item)=>{
            const medicine = item.name;
            const type = item.medicinetype;
            const quantity = item.quantity;
                
            if(medicine === medicineName) {
                const itemDetails = document.querySelector('.medicine-details-list');
                itemDetails.innerHTML = `
                <li><span>Name: </span> ${medicine}</li>
                <li><span>Type: </span> ${type}</li>
                <li><span>Quantity: </span> ${quantity}</li>
                `;
                document.getElementById('medicine-image-display').src = item.image_base64;
                document.getElementById('delete-item').setAttribute('data-id', item.ID)
                UI.fillMedicine(item);
            }
        }); 
        e.preventDefault();
    }

    //This function fills current item in the form to be updated.
    static fillMedicine(item) {
        document.getElementById('medicine-update-id').value = `${item.ID}`;
        document.getElementById('medicine-update-name').value = `${item.name}`;
        document.getElementById('medicine-update-type').value = `${item.medicinetype}`;
        document.getElementById('medicine-update-image-base64').src =`${item.image_base64}`;
        document.getElementById('medicine-update-quantity').value = `${item.quantity}`;
    }
   
}
