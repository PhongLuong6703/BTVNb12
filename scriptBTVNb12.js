function validateForm() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let mess = document.getElementById("errorText");
    if (username.value == "") {        
        mess.innerHTML = "Please Enter UserName";
        return false;
    } else if (password.value.length < 8) {
        mess.innerHTML = "Password Must Be At Least 8 Characters Long.";
        return false;
    } else {
        mess.innerHTML = "Welcome!";
    }
    return true;
}
document.getElementById("myForm").onsubmit = function() {validateForm()};