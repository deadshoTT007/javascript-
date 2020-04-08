### DOM portion

**DOM selectors for single element**
```JAVASCRIPT
> for single element getElementbyId() or querySelector (selectors) are used
```
 > *USED COMMANDS ARE*
```javascript 
*getElementbyId('')
*querySelector('#')  //for id
*querySelector('.className')  // for class
console.log(document.getElementById('an id is passed'));
console.log(document.querySelector('.className));
``` 
For ex:
``` 
HTML PART:
  <h5> id="task-title"Tasks</h5>
```
```JAVASCRIPT  
console.log(document.getElementById('task-title'));       // 'Tasks' is selected by its id (task-title)..it only selects one element if there  are more elements by the same id  then it selects the first element only .

console.log(document.getElementById("task-title").id);     // we can get the id of the selected element 

console.log(document.getElementById("task-title").className);  //we can get the className of the selected element through id

console.log(document.getElementById("task-title").classList);  //we can get the classList of the selected element through id

document.getElementById("task-title").style  // we can put style on it like  bgColor,color,padding etc

console.log(document.querySelector('#task-title'));      //select by id

 console.log(document.querySelector('.collection-item'));  //select by class

 console.log(document.querySelector('h5'));                 //select by tagname
//we can select element by id,class or tag for single selectors  

console.log(document.querySelector('li').style    //selected by tag and can style it accordingly
```


                               