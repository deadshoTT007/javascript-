#EVENT LISTENER AND EVENT OBJECT

document.querySelector('.clear-tasks').addEventListener('click',function(e){
  / console.log('hello');
    e.preventDefault();
    });                //click is an event and addEventListener takes two parameters(event(click),function(e=event)).in this case we have used unnammed function
                                    // displaying hello on clicking the element under the class item(.clear-tasks) and preventing from defaults
   
   
   document.querySelector('.clear-tasks').addEventListener('click',onclick);
function onclick(e){
    console.log('helloworld');
    e.preventDefault();
    console.log(e);                            //display same as above but using nammed function which is more efficient and passing a parameter for various purposes 
                               