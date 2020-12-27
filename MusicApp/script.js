const play=document.querySelector('#play');
const prev=document.querySelector('#prev');
const forward=document.querySelector('#forward');
const music=document.querySelector('audio');
const image=document.getElementById("rotate");
const title=document.getElementById('title');
const artist=document.getElementById('artist');

let total_currentTime=document.getElementById('currentTime');
let total_duration=document.getElementById('duration');
let progress=document.getElementById('progress');
let progress_div=document.getElementById('progress-div');

let is_playing=false;

let allMusic=[
    {
        title:"MUSAFIR",
        artist:"Atif Aslam",
        name:"/manish1",
        
    },
    {
        title:'Wo lamhe',
        artist:"Atif Aslam",
        name:"/manish2",
    },
    {
        title:'Zara Zara',
        artist:"Arjit Singh",
        name:"/manish3",
    }

];

play.addEventListener('click', ()=>{
is_playing?paused():played();
} )

function played(){
    is_playing=true;
    music.play();
    play.classList.replace('fa-play','fa-pause')
    image.classList.add('anime')
    
}
function paused(){
    is_playing=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play')
    image.classList.remove('anime')
}

let songs=0
forward.addEventListener('click',nextSong)

function nextSong(){
    songs=(songs+1)%allMusic.length;
    loadSongs(allMusic[songs]);
    played();
}
function loadSongs(songs){
    title.textContent=`${songs.title}`;
    artist.textContent=`${songs.artist}`;
    image.src=`images/${songs.name}.jpeg`;
    
    music.src=`./music/${songs.name}.mp3`;
}
prev.addEventListener('click',preSong);
function preSong(){
    
    songs=(songs-1 + allMusic.length)%allMusic.length;
    loadSongs(allMusic[songs]);
    played();
}


music.addEventListener('timeupdate',(e)=>{
    const{currentTime,duration}=e.target;
    let width=(currentTime/duration)*100;
    
    progress.style.width=`${width}%`
    let min_duration=Math.floor(duration/60);
    let sec_duration=Math.floor(duration%60);
    if(sec_duration<10){
        sec_duration=`0${sec_duration}`
    }
    
    if(duration){
        total_duration.textContent=`${min_duration}:${sec_duration}`;
    }
    
    let min_currentTime=Math.floor(currentTime/60);
    let sec_currentTime=Math.floor(currentTime%60);
    if(sec_currentTime<10){
         sec_currentTime=`0${sec_currentTime}`;
        
    }
    total_currentTime.textContent=`${min_currentTime}:${sec_currentTime}`;
   

})
 progress_div.addEventListener('click',(e)=>{
     console.log(e)
     const duration=music.duration;
     
     let mov_duration=(e.offsetX / 299)*duration;
     music.currentTime=mov_duration;
     
 })
 music.addEventListener('ended',nextSong);