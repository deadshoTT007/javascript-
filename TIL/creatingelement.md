#Creating Element
let li=document.createElement('li');    //created a tag <li>
we can create a element and add classname,id,setAttributes and append textNodes
HTML PART: For eg
    <li class="collection-item">
    li.className='collectiom-item';
    
    li.setAttribute('title','mylist');                                          // it shows as title="mylist">on li tag
    li.appendChild(document.createTextNode('hellonewlist'));
    //syntax:<li>hellowlist</li>