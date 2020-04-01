
const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');


//load all event listeners

loadEventListeners();
//load all rvent listeners 
function loadEventListeners(){
    //ADD TASK EVENT
    document.addEventListener('DOMContentLoaded',gettask);
form.addEventListener('submit',Add);
taskList.addEventListener('click',remove);
clearBtn.addEventListener('click',clear);
filter.addEventListener('click',filtertask);
}
function gettask(task){ 
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
   
tasks.forEach(function(task){
    const li=document.createElement('li');
     li.className='collection-item';
     li.appendChild(document.createTextNode(task));
     let link=document.createElement('a');
     link.className='delete-item secondary-content';
     link.innerHTML='<i class="fa fa-remove"></i>';
     li.appendChild(link);
     
     taskList.appendChild(li);

});
}
 


function Add(e){
    if(taskInput.value===''){
        alert('add a task');
    }
    
     const li=document.createElement('li');
     li.className='collection-item';
     li.appendChild(document.createTextNode(taskInput.value));
     let link=document.createElement('a');
     link.className='delete-item secondary-content';
     link.innerHTML='<i class="fa fa-remove"></i>';
     li.appendChild(link);
     
     taskList.appendChild(li);

     storeTaskInLocalStorage(taskInput.value);
     
     
     taskInput.value='';
     e.preventDefault();
}
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));        
} 
//remove
function remove(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('are you sure')){
        e.target.parentElement.parentElement.remove();
                // targets to the li because tasklist links to the li because the class of li is '.collection'
   }
  }
 }
function clear(){
    taskList.innerHTML='';
}
 function filtertask(e){
     const text=e.target.value.toLowerCase();
     document.querySelectorAll('.collection-item').forEach(function(task){
         const item=task.firstChild.textContent;
         if(item.toLowerCase().indexOf(text) !=-1){
             task.style.display='block';
         }else{
             task.style.display='none';
         }
     });
 }
