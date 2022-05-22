const form = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const KEY_TODO = "list"

let toDos = [];

function saveToDos() {
    localStorage.setItem(KEY_TODO, JSON.stringify(toDos));    
}

function deleteToDo(event) {
    const target = event.target.parentElement;
    target.remove();
    toDos = toDos.filter(item => item.id !== parseInt(target.id));
    saveToDos();
}

function showList(toDoForm) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    li.id = toDoForm.id;
    span.innerText = toDoForm.text;
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoInput(event) {
    event.preventDefault();
    const toDo = toDoInput.value;
    toDoInput.value="";
    const toDoForm = {
        id : Date.now(),
        text : toDo,
    };
    toDos.push(toDoForm);
    showList(toDoForm);
    saveToDos();
}

form.addEventListener("submit", handleToDoInput);

const savedToDos = localStorage.getItem(KEY_TODO)

if(savedToDos !== null ) {
    const initialshowlist = JSON.parse(savedToDos);
    toDos = initialshowlist;
    initialshowlist.forEach((item) => showList(item)); 
} 