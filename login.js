let actuialUsername = "codingninjas";
let actualPassword = "javascript";

let username, password;

function logout() {
    document.getElementById("container").innerHTML = `
    <h1 align="center">Login Page</h1>
    <div id="form">
        <div id="itemcontainer">
            <div class="item">
                <label>Username: </label>
                <input type="text" id="username">
            </div>
            <div class="item">
                <label>Password: </label>
                <input type="text" id="password">
            </div>
            <button onclick="login();">Login</button>
            <button onclick="forgotPassword();">Forgot Password</button>
        </div>
    </div>
`;
}

function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    console.log(username,password,actualPassword, actuialUsername);
    if (username == actuialUsername && password == actualPassword) {
        document.getElementById("container").innerHTML = `
            <h1 align="center">Home Page</h1>
            <button onclick="logout();">Logout</button>
        `;
    }
}

function changePassword(){
    let newpassword = document.getElementById("newpassword").value;
    actualPassword = newpassword;
    document.getElementById("container").innerHTML = `
    <h1 align="center">Login Page</h1>
    <div id="form">
        <div id="itemcontainer">
            <div class="item">
                <label>Username: </label>
                <input type="text" id="username">
            </div>
            <div class="item">
                <label>Password: </label>
                <input type="text" id="password">
            </div>
            <button onclick="login();">Login</button>
            <button onclick="forgotPassword();">Forgot Password</button>
        </div>
    </div>`;
}

function forgotPassword(){
    document.getElementById("container").innerHTML = `
        <label>New Password:</label>
        <input type="text" id="newpassword">
        <button onclick="changePassword();">Change Password</button>
    `
}