const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    moveCheckedToBottom();
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function moveCheckedToBottom() {
  const items = [...listContainer.children];
  items.sort((a, b) => {
    if (a.classList.contains("checked") && !b.classList.contains("checked")) {
      return 1;
    }
    if (!a.classList.contains("checked") && b.classList.contains("checked")) {
      return -1;
    }
    return 0;
  });
  items.forEach(item => listContainer.appendChild(item));
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  moveCheckedToBottom();
}

showTask();