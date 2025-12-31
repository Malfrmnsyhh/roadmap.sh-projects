const btn = document.getElementById('darkBtn');
const body = document.body;

btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); 
});
