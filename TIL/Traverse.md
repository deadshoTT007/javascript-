# Traverse
> **Commands Used**
```
HTML Part:
                                `<ul.class="collection"
                                <li.class="collection-item " id="dxx"
                                    List Item
                                `<a href="#"
                                class="delete-item secondary-content">`
                                    <i> class="fa fa-remove" id="task-form"</i>
                                </a>
                                </li>
                                <li.class="collection-item">
                                    List Item
                                    <a href="#" class="delete-item secondary-        content">
                                        <i> class="fa fa-remove"  id="task-form"</i>
                                    </a>
                                </li>
```
```JAVASCRIPT

const  listu=document.querySelector('ul.collection');
const  listl=document.querySelector('li.collection-item:first-child');
value=listl;
value=listu;
value=listu.childNodes;               // it shows all its child along with the texts and many others
value=listu.childNodes[0];   
value=listu.children;          //children only gives the element 
value=listu.children[0];       // this gives the first child of ul..  
value=listu.firstChild;              // first child is always text
value=listu.firstElementChild;        // it gives the element of the first child
```