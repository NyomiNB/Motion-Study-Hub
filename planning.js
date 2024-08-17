var button = $('.add')
var container = $('.toDoList')
//event handler
 
 
function addTask(event){
  event.preventDefault()
  var task = $(".task").val()
  container.append(`<p>${task} <button class="delete"> Delete</button><p>`)
  $(".task").val("")
}
function deleteCard(){
  if (event.target.className === "delete"){
    event.target.parentNode.remove()
  }
}

button.on("click", addTask)

container.on("click", deleteCard)

 
