let player1=document.querySelector("#one");
let player2=document.querySelector("#two");
let p1Display=document.querySelector("#score1");
let p2Display=document.querySelector("#score2");;
var setsNo=document.querySelector("p span");
var resetBtn=document.querySelector("#reset")
var numInput=document.querySelector("#numInput")
let p1Score=0;
p2Score=0;
var gameOver=false;
var winningNo=5;


player1.addEventListener("click",function(){
    if(!gameOver){
    p1Score++;
        if(p1Score===winningNo){
            p1Display.classList.add('winner');
            gameOver=true;
    }
    p1Display.textContent=p1Score;  
}

});
player2.addEventListener("click",function(){
    if(!gameOver){
        p2Score++
        if(p2Score===winningNo){
            p2Display.classList.add('winner');
            gameOver=true;
        }
        p2Display.textContent=p2Score;
    }
});
resetBtn.addEventListener('click',function(){
   reset();
})
numInput.addEventListener('change',function(){
    setsNo.textContent= numInput.value;
    winningNo=Number(numInput.value);
    reset();
})
function reset(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;
}