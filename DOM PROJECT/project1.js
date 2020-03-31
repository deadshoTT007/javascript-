
const form=document.querySelector('#task-form');
const tasklist=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

//load all event listeners

loadEventListeners();
//load all rvent listeners 
function loadEventListeners(){
    //ADD TASK EVENT
form.addEventListener('submit',Add);
}
function Add(e){
    if(taskInput.value===''){
        alert('add a task');
    }
    e.preventDefault();
    
}
 

