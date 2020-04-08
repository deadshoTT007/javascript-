# For multiple DOM selectors

> *COMMANDS USED*

- document.getElementsByClassName('class_name');
 - document.getElementsByTagName('tag_name');
 -  document.querySelectorAll('ul.collection li.collection-item'); 
 /* selected by class name */

> HTML PART EX:
 ```
                           `<ul>`class=`<"collection">`
                            `<li>` class="collection-item " id=`<"dxx">`
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
```