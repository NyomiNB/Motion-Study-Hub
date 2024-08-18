 let interval;
let timeLeft = 300;
 
function updateTimer(){
let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

  timerE1.innerHTML = formattedTime;
}
  
 function startTimer(){
interval = setInterval(()=>{
  timeLeft--;
  updateTimer();
  if(timeLeft ==0){

    clearInterval(interval);
    alert("Time's up");
    timeLeft = 300;
  }
}, 1000);
   
  document.querySelector("#myVideo").play();
 
}
function stopTimer(){
console.log("stop");
 clearInterval(interval);
  document.querySelector("#myVideo").pause();

}
function resetTimer(){
clearInterval(interval);
timeLeft = 300;
 updateTimer();
  stopTimer();
console.log("reset");
}
 
const startE1 = document.getElementById("start") 
const stopE1 = document.getElementById("stop")
const resetE1 = document.getElementById("reset")
const timerE1 = document.getElementById("timer")
 startE1.addEventListener("click", startTimer)
  stopE1.addEventListener("click", stopTimer)
  resetE1.addEventListener("click", resetTimer)
   
 
 