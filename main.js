document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("form");
    let btn = document.getElementById("btn");

    btn.addEventListener("click", function(event) {
        event.preventDefault();  

        

        let username = document.getElementById("userName").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirm-password").value.trim();

        let errorusername = document.getElementById("Username-span");
        let erroremail = document.getElementById("Email-span");
        let errorpassword = document.getElementById("password-span");
        let errorcinfpassword = document.getElementById("conPass-span");

        let Verification = true;

        if (!username) {
            errorusername.innerText = "Username is required";
            Verification = false;
        } else if (!/^[a-zA-Z0-9]{3,30}$/.test(username)) {  
            errorusername.innerText = "Please enter a valid username";
            Verification = false;
        }

        
        if (!email) {
            erroremail.innerText = "Email is required";
            Verification = false;
        } else if (!/^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
            erroremail.innerText = "Please enter a valid email";
            Verification = false;
        }

        if (!password) {
            errorpassword.innerText = "Password is required";
            Verification = false;
        }
        
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            errorpassword.innerText = "Password must be at least 8 characters, including uppercase, lowercase, a number, and a special character";
            Verification = false;
        }

        if (!confirmPassword) {
            errorcinfpassword.innerText = "Please confirm your password";
            Verification = false;
        } 
        
        else if (password !== confirmPassword) {
            errorcinfpassword.innerText = "Passwords do not match";
            Verification = false;
        }

        if (Verification) {
           localStorage.setItem("userName", username)
             localStorage.setItem("email", email)
              localStorage.setItem("password", password)

            

            window.location.href ="Sign-In.html"

        }
    });
});
