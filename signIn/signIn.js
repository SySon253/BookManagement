const correctUsername = "admin";  
const correctPassword = "12345";  

document.getElementById('submit-btn').addEventListener('click', function (e) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");


    if (username === correctUsername && password === correctPassword) {
        errorMessage.textContent = ""; 
        const redirectTo = sessionStorage.getItem('redirectTo') || 'home.html';
        debugger
        window.location.href = redirectTo;

    } else {
        e.preventDefault(); 
        errorMessage.textContent = "Tên tài khoản hoặc mật khẩu không đúng!";
    }
});


const eyeIcon = document.getElementById('eye');
eyeIcon.addEventListener('click', function () {
    const passwordField = document.getElementById("password");
    const icon = eyeIcon.querySelector('i');

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash'); 
    } else {

        passwordField.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

document.getElementById('wrapper').addEventListener('submit',function(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === '12345') {
        sessionStorage.setItem('wrapper', 'true');
        
        // Kiểm tra trang cần chuyển hướng sau khi login
        const redirectTo = sessionStorage.getItem('redirectTo') || 'home.html';
        window.location.href = redirectTo;
    } else {
        alert('Invalid login credentials');
    }    
})
