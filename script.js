const stopwatch=document.querySelector('.stopwatch');
const display=document.querySelector('.dis')
const hrToDis=document.querySelector('.hours')
const minToDis=document.querySelector('.minutes')
const secToDis=document.querySelector('.seconds')
const milToDis=document.querySelector('.mili')
const startButton=document.querySelector('.start')
const pauseButton=document.querySelector('.pause')
const resetButton=document.querySelector('.reset')
const castButton=document.querySelector('.cast')

let startTime, elapsedTime=0,timeInterval

function  formatTime(time) {
    let minutes=Math.floor(time/60000);
    let seconds=Math.floor((time%6000)/1000);
    let miliSeconds=Math.floor((time%1000)/10);
    minToDis.textContent=minutes.toString().padStart(2,"0");
    secToDis.textContent=seconds.toString().padStart(2,"0");
    milToDis.textContent=miliSeconds.toString().padStart(2,"0");  
}

function startTimer(){
    startTime=Date.now()-elapsedTime;
    timeInterval=setInterval(()=>{
        elapsedTime=Date.now()-startTime;
        formatTime(elapsedTime);
    },10)
}

function stopTimer() {
    clearInterval(timeInterval);
}

function resetTimer(){
    clearInterval(timeInterval);
    elapsedTime=0;
    formatTime(elapsedTime);
}

function castTimer(){
    let cast=stopwatch.querySelector('.cast-list')
    let index=cast.children.length+1;
    const newCast=document.createElement('li');
    newCast.textContent=`CAST ${index} : ${hrToDis.textContent}:${minToDis.textContent}:${secToDis.textContent}:${milToDis.textContent}`
    cast.appendChild(newCast);
}

startButton.addEventListener('click',startTimer)
pauseButton.addEventListener('click',stopTimer)
resetButton.addEventListener('click',resetTimer)
castButton.addEventListener('click',castTimer)