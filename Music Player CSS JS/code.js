const audio = document.querySelector('audio');
const songLength = document.getElementById('SongLength');
const currentTime = document.getElementById('CurrentSongTime');


const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
    songLength.innerHTML = calculateTime(audio.duration);
}

if (audio.readyState > 0) {
  displayDuration();
  currentTime.innerHTML = calculateTime(audio.currentTime);
} else {
  audio.addEventListener('loadedmetadata', () => {
    displayDuration();
  });
}

audio.ontimeupdate = function(){
    currentTime.innerHTML = calculateTime(audio.currentTime);
    setProgress();
}



//Set Bar Progress
function setProgress(){
    let percentage = (audio.currentTime / audio.duration) * 100;
    document.querySelector('.progress').style.width = percentage + '%'
}

//Audio Controls
let playPause = document.getElementById('PlayPause'),
    plus10 = document.getElementById('Plus10'),
    back10 = document.getElementById('Back10');

playPause.addEventListener('click', ()=>{
    if(audio.paused){
        playPause.src = 'pause.svg';
        audio.play();
    }else{
        playPause.src = 'Play.svg'
        audio.pause();
    }
})

plus10.addEventListener('click', ()=>{
    audio.currentTime += 10;
})
back10.addEventListener('click', ()=>{
    audio.currentTime -= 10;
})