const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");

KEY_CLASSNAME = "hidden";
KEY_USERNAME = "username";

function welcomeText(name) {
    const LogIn = document.querySelector("#login");
    LogIn.classList.toggle(KEY_CLASSNAME);
    LogIn.innerText = `Welcome ${name}`;
}

function handleLogInButton(event) {
    event.preventDefault();
    logInForm.classList.toggle(KEY_CLASSNAME);
    const username = logInInput.value;
    localStorage.setItem(KEY_USERNAME, username);
    welcomeText(username);
}

savedUserName = localStorage.getItem(KEY_USERNAME);

if (savedUserName === null) {
    logInForm.addEventListener("submit", handleLogInButton);
    } else {
    logInForm.classList.toggle(KEY_CLASSNAME);
    welcomeText(savedUserName);
}