const darkBtn = document.getElementById('darkBtn');
const body = document.body;

darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    body.classList.contains('dark-mode') 
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light')
})

if(localStorage.getItem('theme') === 'dark') {
    body.classList.toggle('dark-mode');
}

const tabLinks = document.querySelectorAll('.tab-link');
const tabContent = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        tabLinks.forEach(item => item.classList.remove('active'));
        tabContent.forEach(content => content.classList.remove('active'));

        link.classList.add('active');

        const targetId = link.getAttribute('data-target');

        document.getElementById(targetId).classList.add('active');
    })
})