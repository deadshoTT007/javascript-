
/*

function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}
function UI(){}
UI.prototype.addbooktolist=function(book){
    //add book to list
    const list=document.getElementById('book-list');
    const row=document.createElement('tr');
    
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
    

    list.appendChild(row);
}

UI.prototype.showalert=function(message,classname){
    //create div
    const div=document.createElement('div');
    div.className=`'.alert' ${classname}`;
    div.appendChild(document.createTextNode(message));
    //get parent
    const container=document.querySelector('.container');
    const form=document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div,form);
    //timeout after 3 sec
    //setTimeout(function(){
    //    document.querySelector('.alert').remove;
   // },3000);
}
UI.prototype.delete=function(target){
    if(target.className==='delete'){
    target.parentElement.parentElement.remove();
}
}

 UI.prototype.clearfields=function(){
     document.getElementById('title').value='';
     document.getElementById('author').value='';
     document.getElementById('isbn').value='';
}

//EVENT LISTENER FOR ADD BOOK
document.getElementById('book-form').addEventListener('submit',function(e){
    //get form values
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const isbn=document.getElementById('isbn').value;
    console.log(title,author,isbn);


const book=new Book(title,author,isbn);
const ui=new UI();
console.log(ui);
//validate
if(title === ''||author===''||isbn===''){
    ui.showalert('please fill in the box','error');  //we have implemented error in css
}else{
//add book to list
ui.addbooktolist(book);
//show success
ui.showalert('book added','success');
//clear fields
ui.clearfields();
}
e.preventDefault();
});
//EVENT LISTENER FOR DELETE
document.getElementById('book-list').addEventListener('click',function(e){
    const ui=new UI();
    ui.delete(e.target);
    ui.showalert('book removed','success');
});


//addbooktolist
//clear field
//deletebook
//showalert
//these four are the part of the UI prototype
*/