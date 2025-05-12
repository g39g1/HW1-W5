document.addEventListener("DOMContentLoaded", function () {

    let btn = document.getElementById("btn");

    btn.addEventListener("click", function (event) {
        event.preventDefault();

        let username = document.getElementById("userName").value.trim();
        let password = document.getElementById("password").value.trim();

        let errorusername = document.getElementById("UserName-error");
        let errorpassword = document.getElementById("password-error");

        if (!username) {
            errorusername.innerText = "Username is required";
            Verification = false;
        } else if (!/^[a-zA-Z0-9]{3,30}$/.test(username)) {
            errorusername.innerText = "Please enter a valid username";
            Verification = false;
        }

        if (!password) {
            errorpassword.innerText = "Password is required";
            Verification = false;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            errorpassword.innerText = "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character";
            Verification = false;
        }
       
        let stordU = localStorage.getItem("userName");
        let stordP = localStorage.getItem("password");

        if (username === stordU && password === stordP) {
              alert(`Welcome ${stordU}`);
              
            window.location.href = "api.html"; 
        }
        else{
            alert("passowrd is not correct");
        }
    });
});


