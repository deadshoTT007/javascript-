const PageState=function(){
    let currentState=new homeState(this);   //this pritends to above fn   
    this.init=function(){
        this.change(new homeState);  //this.change is the function which is going to change the currentState
    }                    
    this.change=function(state){
        currentState=state;
    }                                                                                                                                                          
};
//Home State
const homeState=function(page){
    document.querySelector('#heading').textContent=null;
    document.querySelector('#content').innerHTML=`
    <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>`
}

//About US
const aboutState=function(page){
    document.querySelector('#heading').textContent='About Us';
    document.querySelector('#content').innerHTML=`
    <h3> THIS IS ABOUT MA LONG</H3>`
    
    var img = document.createElement("img");
 
img.src = "malong.jpg";
var image = document.getElementById("x");
 
image.appendChild(img);
image.height=100;
 image.width=100;
}
//coNTACT sTATE
const contactState=function(page){
    document.querySelector('#heading').textContent='Contact Us';
    document.querySelector('#content').innerHTML=`
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>`
}
//Instantiate pageState 
const page=new PageState();
//Init the first page
page.init();

//UI Vars
const home=document.getElementById('home');
const about=document.getElementById('about');
const contact=document.getElementById('contact');
//ADDING EVENT LISTENOERS
home.addEventListener('click',(e)=>{
    page.change(new homeState);
    e.preventDefault();
});
about.addEventListener('click',(e)=>{
    const malong=page.change(new aboutState);
    console.log(malong);

    e.preventDefault();
});
contact.addEventListener('click',(e)=>{
    page.change(new contactState);
    e.preventDefault();
});
