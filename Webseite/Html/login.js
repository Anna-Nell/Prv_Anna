document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('.form-signin');
    const passwordInput = document.querySelector('#inputPassword');

    form.addEventListener('submit', function (e) {
        e.preventDefault();  // Verhindert das Standardverhalten des Formulars
        const password = passwordInput.value;
        
        if (password === 'test1') {
            window.location.href = 'info.html';
        } else {
            alert('Falsches Passwort. Bitte versuchen Sie es erneut.');
            passwordInput.value = '';  // Leert das Passwortfeld
        }
    });
});