document.getElementById("loginButton").addEventListener("click", function (e){
    let password =document.getElementById("password").value;
    
    let regex=/^[a-zA-Z0-9]{8,}$/;
    if(! regex.test(password)){
        e.preventDefault();
        document.getElementById("message").innerHTML=`
        <p>Password should contain small & capital letters and numbers (ine of them at least) and shouldn't be less than 8 characters</p>`
    }
    else {
        document.getElementById("loginForm").submit();
    }
});