const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btn = document.querySelector(".btn");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  }else if(inputBox.value === " "){
    alert("You must write something!");
  }
   else {
    const listItem = document.createElement("li");
    listItem.innerHTML = inputBox.value; // transferring the value of input box to listitem
    saveData();
    listContainer.appendChild(listItem); //append =appendChild
    const span = document.createElement("span");
    span.innerHTML = "&#x2715;"; // "x" mark
    listItem.appendChild(span);
  }
  inputBox.value = " ";//inputBox er value blank korar jonno
  saveData();
}

btn.addEventListener("click", function () { // "+" button add krne se addtask func cll ho rha hain
  addTask();
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") { //listItem hole 
    e.target.classList.toggle("checked");//classList mtlb  "checked"class add krna 
    saveData();
  } else if (e.target.tagName === "SPAN") { //
    e.target.parentElement.remove(); //span tag er parent  element  removal
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); //data ek variable hain
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();