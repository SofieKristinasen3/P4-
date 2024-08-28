let users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" }
];

let modal = document.getElementById("loginModal");
let loginBtn = document.getElementById("loginBtn");
let closeBtn = document.getElementsByClassName("close-btn")[0];
let submitBtn = document.getElementById("submitBtn");
let errorMsg = document.getElementById("error-msg");

// tryk på knappen for at åbne login boksen
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// tryk på kryds for at lukke ned
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// tryk udenfor boksen for at lukke boksen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// når man trykker på log ind
submitBtn.onclick = function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let isValid = false;

    // Loop igennem ens arrays.
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        alert("Velkommen!");
        modal.style.display = "none";
    } else {
        errorMsg.style.display = "block";
    }
}