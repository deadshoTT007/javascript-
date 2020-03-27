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
*/

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







































