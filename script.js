var body = $("body")
// var text = document.getElementById("welcome");

var light = $(".lightmode")

light.on("click" , lightfunction)

function lightfunction(){
  body.css("background" , "white")
}

//dark mode
var dark = $(".darkmode")
dark.on("click" , darkfunction)

function darkfunction(){
  body.css("background" , "black")
  // text.color = "yellow";
}

    localStorage.setItem("data", );
