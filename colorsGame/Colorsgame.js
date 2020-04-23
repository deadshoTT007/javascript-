var numSquares=6
var colors=generateNumber(numSquares);
var square=document.querySelectorAll('.square');
var pickedColor=randomNo();
var colorDisplay=document.getElementById('spanId');
colorDisplay.textContent=pickedColor; 
 var messageDisplay=document.querySelector("#tryAgain");
 var h1=document.querySelector('#back')
 var resetBtn=document.querySelector('#message');
 var easyBtn=document.querySelector('#easyBtn');
 var hardBtn=document.querySelector('#hardBtn');
 easyBtn.addEventListener('click',function(){
easyBtn.classList.add('selected');
hardBtn.classList.remove('selected');
numSquares=3
colors=generateNumber(numSquares);
pickedColor=randomNo();
colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++){
        if(colors[i]){
            square[i].style.background=colors[i];
           
        }else{
            square[i].style.display='none';
        
    }
}
 })
 hardBtn.addEventListener('click',function(){
easyBtn.classList.remove('selected');
hardBtn.classList.add('selected');
numSquares=6;
colors=generateNumber(numSquares);
pickedColor=randomNo();
colorDisplay.textContent=pickedColor;
    for(var i=0;i<square.length;i++){ 
            square[i].style.background=colors[i];
            square[i].style.display='block';
        
    }
 })
 resetBtn.addEventListener('click',function(){
     //generate all new nbumbers
     colors=generateNumber(numSquares);       
     //pick a new random color from array
    pickedColor=randomNo();
    
    //change the display color with new picled color
    colorDisplay.textContent=pickedColor;
    this.textContent='New colors';
    messageDisplay.textContent='';
    //change colors of squares

    for(var i=0;i<square.length;i++){
        square[i].style.background=colors[i];
    }
h1.style.background="steelblue"
 })
for(var i=0;i<square.length;i++){
    
        //add initail colors to squares
        square[i].style.background=colors[i];
        //add click Listeners to squares
        square[i].addEventListener('click',function(){
       var clickedColor=this.style.background;
       if(clickedColor===pickedColor){
              messageDisplay.textContent="Correct!";
              resetBtn.textContent="Play Again!!";
              setColors(clickedColor);
              
              h1.style.background=clickedColor;
       }else{
           this.style.background="#232323";
           messageDisplay.textContent="try Again";
       }
        })
}
function setColors(sameColor){
    for(var i=0;i<square.length;i++){
        square[i].style.background=sameColor;
    }
}
function randomNo(){
   var random= Math.floor(Math.random()*colors.length);
   return colors[random];                   //the random value generated is stored in colors array to change the colors value each time
}

function generateNumber(num){
    //make an array
    arr=[];
//repeat num times
for(var i=0;i<num;i++){
//get random colors and push to array
arr.push(randomColors());
}
    //return an array
    return arr;
}
function randomColors(){
    var r=Math.floor(Math.random()* 256);
    var g=Math.floor(Math.random()* 256);
    var b=Math.floor(Math.random()* 256);
    'rgb(r, g, b)'
    return "rgb("+ r + ", " + g+ ", "+ b+ ")";
}