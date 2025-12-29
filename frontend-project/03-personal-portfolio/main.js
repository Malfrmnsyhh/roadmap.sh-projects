const toggleBtn = document.getElementById('darkBtn');
const body = document.body;
const iconElement = toggleBtn.querySelector('.icon');

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        iconElement.textContent = '☀️'; 
    } else {
        iconElement.textContent = '🌙';
    }
});