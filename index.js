function submitHandler(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    if(!name || !age || !phone || !email || !password || !confirmpassword){
        document.getElementById("message").innerText = "You havenot filled the form";
        document.getElementById("message").style.color = "red";
    }
    else if(password != confirmpassword){
        document.getElementById("message").innerText = "Passwords doesn't match";
        document.getElementById("message").style.color = "red";   
    }
    else{
        document.getElementById("message").innerText = "Form filled successfully";
        document.getElementById("message").style.color = "green";
    }
}

// .match