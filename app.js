/*let val;
val=document;
val=document.all;
val=document.all[2];   //head
val=document.all.length;  //41
val=document.head;     
val=document.body;
val=document.doctype; 
val=document.domain;
val=document.URL;
val=document.characterSet;  // UTF-8
val=document.contentType;   // text/html

val=document.forms;
val=document.forms[0];
val=document.forms[0].id;
val=document.forms[0].method;
val=document.forms[0].action;

val=document.links;
val=document.links[0];
val=document.links[0].id;
val=document.links[0].className;
val=document.links[0].classList;

val=document.images;

val=document.scripts;     //this only shows the no.of scripts
val=document.scripts[0];
val=document.scripts[0].getAttribute('src');
/*
let script=document.scripts;
let scriptsArr = Array.from(script);
scriptsArr.forEach(function(script){     //this shows all the script or the content of each scripts
    console.log(script);
});


let script=document.scripts;
let scriptsArr = Array.from(script);
scriptsArr.forEach(function(script){     //this shows  the source of each  script 
    console.log(script.getAttribute('src'));
});


//document.getElementById()
console.log(document.getElementById('task-form'));

//get things from the element
console.log(document.getElementById("task-title").id);

console.log(document.getElementById("task-title").className);

console.log(document.getElementById("task-title").classList);
//change styling
document.getElementById("task-title").style.background="blue";
document.getElementById('task-title').style.color="white";
document.getElementById("task-title").style.padding="5px";

//document.getElementById("task=title").style.display="none";

//changing content
let id=document.getElementById('task-title');
id.textContent="my task";   //text content le chahi tyo id ma vako value lai change garxa...paile task thiyo aaba my task hunxa
id.innerText="its my task";
 id.innerHTML='<span style="color:red">task</span>';
 
 console.log(document.querySelector('#task-title'));
 console.log(document.querySelector('.collection-item'));
 console.log(document.querySelector('h5'));

 console.log(document.querySelector('li').style.color='green');
 console.log(document.querySelector('ul li').style.color='yellow');
 console.log(document.querySelector('li:last-child').style.color='orange');   //li use gareko last ko value lai select garxa
 console.log(document.querySelector('li:nth-child(3)').style.color='purple');  //li use gareko 3 rd ko value lai select garxa
 console.log(document.querySelector('li:nth-child(2)').textContent='changedlist');  //li use gareko 2nd ko value lai change garera changedlist banauxa
 console.log(document.querySelector('li:nth-child(odd)').style.color='blue');       // li ko first odd lai matra blue banauxa vacause querySelector is a single selector 
 console.log(document.querySelector('li:nth-child(even)').style.color='blue');

let items=document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color='red';                    // this shows all the items that are on the 'collection-item' Classname 
items[0].textContent='changedlist';             //this works for whole

let list=document.querySelector('ul').getElementsByClassName('collection-item');
console.log(list);   //this is only the 'collection-item' classes that is only inside the ul
                      //this works for only class defined inside the ul(specific)


let lis=document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[3].style.color='blue';
 lis[4].textContent='changedlist';

 let liss=Array.from(lis)
 liss.reverse();
 liss.forEach(function(li){                        // incase of reverse() and for each we have to change the givel list into array
     console.log(li.className);
     console.log(li.id);
 });
     liss.forEach(function(lit,index){
        console.log(lit.className);                              // for each le 2ta parenthesis lina sakxa (index and string) name j lekhda ni hunxa parenthesis bhitra
        console.log(`${index}:${lit.className}`);                
        lit.textContent=`${index}:hello`
     });
     

    let item=document.querySelectorAll('ul.collection li.collection-item');
    item.forEach(function(list,index){                      // the string part should be first in the for each parenthesis(string,index)
        list.textContent=`${index}:hello`                   // incase of queryselectorall we dont have to change the given list into array
    });
    console.log(item);

    let itemodd=document.querySelectorAll('li:nth-child(odd)');
    let itemeven=document.querySelectorAll('li:nth-child(even');
    itemodd.forEach(function(lists,index){
        lists.textContent=`${index}:oddlist`;
        lists.style.background='black';
        lists.style.color='red';
    })
    itemeven.forEach(function(lists,index){
        lists.textContent=`${index}:evenlist`;
        lists.style.color='blue';
        lists.style.background='black'; 
    });
for(i=0;i<itemodd.length;i++){
itemodd[i].textContent='oddestlist';
}
for(i=0;i<itemeven.length;i++){
    itemeven[i].textContent='evenedlist';
}
 
let value;
const  listu=document.querySelector('ul.collection');
const  listl=document.querySelector('li.collection-item:first-child');
value=listl;
value=listu;
value=listu.childNodes;               // it shows all its child along with the texts and many others
value=listu.childNodes[0];            // it gives text because at first we have text and then element in this case...
value=listu.childNodes[1];            //it has element
value=listu.childNodes[2];             // again it have text and so on
value=listu.childNodes[0].nodeName;  
value=listu.childNodes[0].nodeType;            // it gives the type of node


// 1- element
// 2-attribute
// 3-text-node
// 8-comment
// 9-document itself
//10-DOCTYPE

// GET CHILDREN NODES

value=listu.children;          //children only gives the element 
value=listu.children[0];       // this gives the first child of ul..
value=listu.children[1].textContent='changed';
value=listu.children[2].style.background='black';
value=listu.children[2].style.color='white';
value=listu.children[2].children[0];    // it gives the first link of the 2nd children of the ul
//FOR FIRST CHILD
value=listu.firstChild;              // first child is always text
value=listu.firstElementChild;        // it gives the element of the first child
//FOR LAST CHILD
value=listu.lastChild;                // last child is also always text
value=listu.lastElementChild;         // it gives the element of the last child
//FOR CHILD COUNT
value=listu.childElementCount;        // it counts the total element in the ul
//GET PARENT NODE
value=listl.parentNode;               // li ko parent(ul) bhitra kati ota element xa dekhauxa  
value=listl.parentElement;             // li ko parent(ul) element dekhauxa
value=listl.parentElement.parentElement; // li ko parent(ul) ko parent element lai dekhauxa

//GET NEXT SIBLING
value=listl.nextSibling;                 
value=listl.nextElementSibling;          //ul ko second clild li[1] element lai dekhauxa
value=listl.nextElementSibling.nextElementSibling.previousElementSibling;  //li[1] lai dekhauxa
value=listl.nextElementSibling.nextElementSibling;      //li[2] element lai dekhauxa
//GET PREV SIBLINGS
//value=listl.previousSibling;
//value=listl.previousElementSibling;          
//value=listl.previousElementSibling.previousElementSibling;
console.log(value);
*/

//CREATING ELEMENT
let li=document.createElement('li');        
li.className='collectiom-item';             // we have created a element called li and aaded className,id,setAttributes and appended textNodes on the li tag
li.id='new-id';
li.setAttribute('title','mylist');                                          // it shows as title="mylist">
li.appendChild(document.createTextNode('hellonewlist'));
let link=document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML='<i "fa fa-remove"  id="task-form"></i>';
let aa=document.querySelector('ul.collection').appendChild(li);    // we have appended the <li class="collectiom-item" id="new-id" title="mylist">hellonewlist</li>  on the ul
console.log(aa);
console.log(li);