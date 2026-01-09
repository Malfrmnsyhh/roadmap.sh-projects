const themeBtn = document.getElementById('theme-toggle');
const body = document.body;
const inputs = document.querySelectorAll('input');
const toggles = document.querySelectorAll('.toggle-password');
const progressBar = document.querySelector('.progress-bar-fill');
const progressText = document.getElementById('progress-text');

const hasNumber = /\d/;
const hasLetter = /[a-zA-Z]/

if(localStorage.getItem('theme') === 'dark') 
    body.classList.add('dark-mode');


themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    themeBtn.innerHTML = isDark 
    ? '<i class="fa fa-sun"></i>' 
    : '<i class="fa fa-moon"></i>';
    themeBtn.setAttribute('aria-label', isDark 
        ? 'Toggle light mode' 
        : 'Toggle dark mode');
});

toggles.forEach(btn => {
    btn.addEventListener('click', () => {
        const inputId = btn.getAttribute('aria-controls');
        const input = document.getElementById(inputId);

        if(!input){return};

        const isPassword = input.type === 'password';
        
        input.type = isPassword ? 'text' : 'password';

        btn.innerHTML = isPassword 
        ? '<i class="fas fa-eye-slash"></i>' 
        : '<i class="fas fa-eye"></i>';
        btn.setAttribute('aria-label', isPassword 
            ? 'Hide password' 
            : 'Show password');
    });
});

const requirements = {
    fullname : false,
    email : false,
    length: false,
    mix: false,
    match : false,
};

const checkProgress = () => {
    const nameValue = document.getElementById('fullname').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const passwordValue = document.getElementById('password').value;
    const confirmValue = document.getElementById('confirm-password').value;

    requirements.fullname = nameValue.length > 7;
    requirements.email = emailValue.includes('@') && emailValue.includes('.');
    requirements.length = passwordValue.length >= 6;
    requirements.mix = hasNumber.test(passwordValue) && hasLetter.test(passwordValue);
    requirements.match = passwordValue.length > 0 && passwordValue === confirmValue;

    updateChecklistUI('req-name', requirements.fullname);
    updateChecklistUI('req-email', requirements.email);
    updateChecklistUI('req-length', requirements.length);
    updateChecklistUI('req-mix', requirements.mix);
    updateChecklistUI('req-match', requirements.match);

    const keys = Object.keys(requirements);
    const completeCount = keys.filter(key => requirements[key]).length;
    const percent = (completeCount / keys.length) * 100;

    progressBar.style.width = `${percent}%`;
    progressText.innerText = `${Math.round(percent)}%`;

    if(percent === 100) {
        progressBar.style.backgroundColor = 'var(--success)';
    } else {
        progressBar.style.backgroundColor = 'var(--progress-fill)';
    }
};

const updateChecklistUI = (id, isValid) => {
    const el = document.getElementById(id);
    if(!el) return;

    if(isValid) {
        el.classList.add('completed');
        el.classList.remove('pending');
    } else {
        el.classList.remove('completed');
        el.classList.add('pending');
    }
}

inputs.forEach(input => {
    input.addEventListener('input', checkProgress);
})