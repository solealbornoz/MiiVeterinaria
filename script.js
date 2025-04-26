// Elementos del DOM
const accountBtn = document.getElementById('accountBtn');
const modal = document.getElementById('authModal');
const closeBtn = document.querySelector('.close');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Mostrar modal de cuenta
accountBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

// Cambiar a formulario de registro
showRegister.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Cambiar a formulario de login
showLogin.addEventListener('click', function (e) {
    e.preventDefault();
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

// Cerrar modal
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Validación simple del formulario de registro
if (registerForm) {
    const form = registerForm.querySelector('form');
    form.addEventListener('submit', function (e) {
        const passwords = form.querySelectorAll('input[type="password"]');
        const password = passwords[0];
        const confirmPassword = passwords[1];

        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            alert('Las contraseñas no coinciden');
        }
    });
}
