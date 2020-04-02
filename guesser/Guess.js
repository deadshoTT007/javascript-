/* 
//GAME FUNCTION
-player must guess a no. betweel 1 and 10
-player gets a certain fixed amout of guess
-notify the player about the guesses remaining
-notify the payer of the correct answer if loose
-let player choose to play again 
*/
//gsne values
let min=4,
max=10,
winningnum=getrandomnumber(min,max),
guessesleft=3;
//UI Elements
const game =document.querySelector('#game'),
 minnum=document.querySelector('.min-num'),
 maxnum=document.querySelector('.max-num'),
 guessbtn=document.querySelector('#guess-btn'),
guessinput=document.querySelector('#guess-input'),
message=document.querySelector('.message');
 minnum.textContent=min;
 maxnum.textContent=max;
 //play again event listener
 game.addEventListener('mousedown',function(e){
     if(e.target.classname==='play-again'){
         window.location.reload();
     }
 })
 guessbtn.addEventListener('click',function(){
     let guess=parseInt(guessinput.value);
     console.log(guess);
     if(isNaN(guess) || guess < min || guess > max){
         setmessage(`enter the number between ${min} and ${max}`,'red');
     };
     //check if won
     if(guess===winningnum){
        //  guessinput.disabled=true;
        // // guessinput.style.borderColor='green';
        //  setmessage(`You Win!!..${winningnum} is the correct answer `,'green');
        gameover(true,`You Win!!..${winningnum} is the correct answer `,'green');
     }
     else{
         guessesleft -= 1;
         if(guessesleft===0){
            //  guessinput.disabled=true;
            //  setmessage(`You loose!!the correct answer is ${winningnum}`,'red');
gameover(false,`You loose!!the correct answer is ${winningnum}`,'red');
         }else{
             guessinput.value='';
             setmessage(`guesses left ${guessesleft}`,'red')
         }

     }
     
 });
 function gameover(won,msg,color){
    guessinput.disabled=true;
    // guessinput.style.borderColor='green';
     setmessage(msg,color);
 
 //play again
 guessbtn.value='play again';
 guessbtn.classname+='play-again';
 }
 function getrandomnumber(min,max){
     console.log(Math.floor(Math.random()*(max-min+1)+min));
 }
 function setmessage(msg,color){
    guessinput.style.borderColor=color;
     message.style.color=color;
     message.textContent=msg;
 }

 //error part is not working
 //random number generation not working