const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const actionBtn = document.getElementById('signinBtn');
const toggleText = document.getElementById('toggleText');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const form = document.querySelector(".form-box form");

let isSignup = false;

nameField.style.display = "none";

function showSignup(e) {
    if (e) e.preventDefault();
    clearFields();
    isSignup = true;
 
    title.style.opacity = 0;
    setTimeout(() => {
        title.innerHTML = "Sign Up";
        title.style.opacity = 1;
    }, 150);

    nameField.classList.remove("hide");
    nameField.style.display = "block";
    actionBtn.innerHTML = "Sign Up";

    toggleText.innerHTML = `
        Already a User?
        <a href="#" id="signinLink">Log In</a>
    `;
    document.getElementById('signinLink').onclick = showSignin;
}

function showSignin(e) {
    if (e) e.preventDefault();

    isSignup = false;
    clearFields();
    title.style.opacity = 0;
    setTimeout(() => {
        title.innerHTML = "Log In";
        title.style.opacity = 1;
    }, 150);

    nameField.classList.add("hide");
    setTimeout(() => {
        nameField.style.display = "none";
    }, 300);

    actionBtn.innerHTML = "Log In";

    toggleText.innerHTML = `
        Not A Member?
        <a href="#" id="signupLink">Sign Up</a>
    `;
    document.getElementById('signupLink').onclick = showSignup;
}

actionBtn.onclick = function (e) {
     e.preventDefault();
    const email = emailField.value.trim();
    const password = passwordField.value.trim();
    const name = nameField.value.trim();

    if (isSignup) {
        if (name === "" || email === "" || password === "") {
            alert("Please fill the fields first",);
            return;
        }
        alert("Sign Up Successful!");
    } else {
        if (email == "" || password == "") {
            alert("Please fill the fields first");
            return;
        }
        alert("Log In Successful!");
    }
};

document.getElementById('signupBtn').onclick = showSignup;


function clearFields() {
    nameField.value = "";
    emailField.value = "";
    passwordField.value = "";
}
nameField.classList.add("hide");

