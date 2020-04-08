# Creating Element
```javascript
let li=document.createElement(`<li>`); 
```
  */ created a tag `<li>` */

**we can create a element and add classname,id,setAttributes and append textNodes**

HTML PART: For eg:

```javascript
    `<li>` class="collection-item">
```
```
    li.className='collectiom-item';
    li.setAttribute('title','mylist');                                    
    li.appendChild(document.createTextNode('hellonewlist'));
```
```javascript
output:
   <li class="collection-item">hellowlist</li>
```   
  