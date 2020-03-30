DOM portion

 DOM selectors for single element
#for single element getElementbyId or querySelector (selectors) are used

 USED COMMANDS ARE
#getElementbyId
document.getElementById()
console.log(document.getElementById('an id is passed'));   //
For ex:
  <h5 id="task-title">Tasks</h5>
console.log(document.getElementById('task-title'));       // 'Tasks' is selected by its id (task-title)..it only selects one element if there 

                                                            are more elements by the same id  then it selects the first element only 
console.log(document.getElementById("task-title").id);     // we can get the id of the selected element 

console.log(document.getElementById("task-title").className);  //we can get the className of the selected element through id

console.log(document.getElementById("task-title").classList);  //we can get the classList of the selected element through id
  

document.getElementById("task-title").style  // we can put style on it like  bgColor,color,padding etc

#querySelector(querySelector() returns a single object with the first HTML element that matches the 'selectors')

console.log(document.querySelector('#task-title'));      //select by id
 console.log(document.querySelector('.collection-item'));  //select by class
 console.log(document.querySelector('h5'));                 //select by tagname

//we can select element by id,class or tag for single selectors

onsole.log(document.querySelector('li').style    //selected by tag and can style it accordingly

#For multiple DOM selectors 

document.getElementsByClassName('class_name');
document.getElementsByTagName('tag_name');
document.querySelectorAll('ul.collection li.collection-item');   //selected by class name
HTML part:
                                

                               <ul class="collection">
                                <li class="collection-item " id=dxx>
                                    List Item
                                <a href="#" class="delete-item secondary-content">
                                    <i class="fa fa-remove" id="task-form"></i>
                                </a>
                                </li>
                              <li class="collection-item">
                                    List Item
                                    <a href="#" class="delete-item secondary-content">
                                        <i class="fa fa-remove"  id="task-form"></i>
                                    </a>
                                </li>
                               
