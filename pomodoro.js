 //POMODORO
//initializing variables
 let interval;
let initialTime = 1500;
let timeLeft = 1500;
  let started = false;
 
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
  console.log(" start");

    clearInterval(interval);
    alert("Your 25 minute focus time is over!");
    timeLeft = initialTime;
  }
}, 1000);
   
  document.querySelector("#myVideo").play();
 
}
function stopTimer(){
  start.textContent ="Start";
console.log("stop");
 clearInterval(interval);
  document.querySelector("#myVideo").pause();
}
function resetTimer(){
  started = false;
    clearInterval(interval);
timeLeft = initialTime;
 updateTimer();
  stopTimer();
console.log("reset");
} 
   function checkTimer(){
started  = !started;    
if (started){
   start.textContent = "Stop"; 
    console.log("checktimer stop");

  startTimer();
} else{
start.textContent = "Start"; 
stopTimer();
  console.log("checktimer stop");
}
  }
 
   function updateInterface1(){
 resetTimer();

  initialTime = 1500;
    timeLeft = 1500; 
timer.textContent = "25:00"; 
       long.classList.remove("selected");

 long.classList.add("unselected");
      short.classList.remove("selected");

 short.classList.add("unselected");
     pomodoro.classList.remove("unselected");

pomodoro.classList.add("selected");
    }
   function updateInterface2(){
           initialTime = 300;
    timeLeft = 300; 
timer.textContent = "5:00"; 
resetTimer();

          long.classList.remove("selected");

 long.classList.add("unselected");
      short.classList.remove("unselected");

 short.classList.add("selected");
     pomodoro.classList.remove("selected");

pomodoro.classList.add("unselected");

   }
   function updateInterface3(){
   initialTime = 900;
    timeLeft = 900; 
timer.textContent = "5:00"; 
resetTimer();
      long.classList.remove("unselected");

long.classList.add("selected");
     short.classList.remove("selected");

     short.classList.add("unselected");
          pomodoro.classList.remove("selected");

pomodoro.classList.add("unselected"); 
   }

const startE1 = document.getElementById("start") 
 const resetE1 = document.getElementById("reset")
const timerE1 = document.getElementById("timer")
const long = document.getElementById("longBreakButton")
const short = document.getElementById("shortBreak")
const pomodoro = document.getElementById("pomodoroButton")
 
  pomodoro.addEventListener("click", updateInterface1)
 short.addEventListener("click", updateInterface2)
 long.addEventListener("click", updateInterface3)

 startE1.addEventListener("click", checkTimer)
   resetE1.addEventListener("click", resetTimer)
   
 
 //initializing css
 long.classList.add("unselected");
 
 short.classList.add("unselected");
 
pomodoro.classList.add("selected");

 