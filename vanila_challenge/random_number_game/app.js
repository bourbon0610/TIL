const inputForm = document.querySelector("#input-limit-num-form")
const input = document.querySelector("#input-limit-num-form input")

const inputUserForm = document.querySelector("#input-user-num-form")
const inputUser = document.querySelector("#input-user-num-form span:first-child input")
const inputUserPlay = document.querySelector("#input-user-num-form span:last-child input")

const firstLine = document.querySelector("#game-form span:first-child")
const lastLine = document.querySelector("#game-form span:last-child")

function handleInputForm(event) {
    event.preventDefault();
    localStorage.setItem("limit", input.value);
    console.log(localStorage.getItem("limit"));
}

function handleInputUser(event) {
    event.preventDefault();
    localStorage.setItem("userNumber", inputUser.value);
}

function handleUserPlay(event) {
    event.preventDefault();
    localStorage.setItem("userNumber", inputUser.value);
    console.log(localStorage.getItem("limit"))
    let machineNumber = Math.floor(Math.random()*localStorage.getItem("limit"));
    console.log(machineNumber);
    const limit = localStorage.getItem("limit");   
    const userNumber = localStorage.getItem("userNumber");   

    firstLine.innerText = `You choose ${userNumber}, the machine choose ${machineNumber}.\n`

    if (machineNumber <= parseInt(userNumber)) {
        lastLine.innerText = "You win!"
        lastLine.stlye.fontweight = "900";
    } else {
        lastLine.innerText = "You lost!"
    };
}

inputForm.addEventListener("submit", handleInputForm);
inputUser.addEventListener("submit", handleInputUser);
inputUserPlay.addEventListener("click", handleUserPlay);
