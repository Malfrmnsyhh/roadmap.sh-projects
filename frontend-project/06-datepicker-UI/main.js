const datePicker = document.querySelector('.datepicker');
const dateInput = document.querySelector('.date-input');
const yearInput = document.querySelector('.year-input');
const monthInput = document.querySelector('.month-input');
const cancelBtn = document.querySelector('.cancel');
const applyBtn = document.querySelector('.apply');
const dates = document.querySelector('.dates');

const nextBtn = datePicker.querySelector('.next');
const prevBtn = datePicker.querySelector('.prev');

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

dateInput.addEventListener('click', () => {
    datePicker.hidden = false;
});

cancelBtn.addEventListener('click', () => {
    datePicker.hidden = true;
});

applyBtn.addEventListener('click', () => {
    dateInput.value = selectedDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    datePicker.hidden = true;
});

nextBtn.addEventListener('click', () => {
    if (month === 11) year++;
    month = (month + 1) % 12;
    displayDates();
});

prevBtn.addEventListener('click', () => {
    if (month === 0) year--;
    month = (month - 1 + 12) % 12;
    displayDates();
});

monthInput.addEventListener('change', () => {
    month = monthInput.selectedIndex;
    displayDates();
});

yearInput.addEventListener('change', () => {
    year = yearInput.value;
    displayDates();
});

const updateYearMonth = () => {
    monthInput.selectedIndex = month;
    yearInput.value = year;
};


const handleDateClick = (e) => {
    const button = e.target;

    const selected = dates.querySelector('.selected');
    selected && selected.classList.remove('selected');

    button.classList.add('selected');

    selectedDate = new Date(year, month, parseInt(button.textContent));
};

const displayDates = () => {
    updateYearMonth();
    dates.innerHTML = ('');

    const lastOfPrevMonth = new Date(year, month, 0);

    for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
        const text = lastOfPrevMonth.getDate() -
            lastOfPrevMonth.getDay() + i;
        const button = createBtn(text, true);
        dates.appendChild(button);
    };


    const lastOfMonth = new Date(year, month + 1, 0);

    for (let i = 1; i <= lastOfMonth.getDate(); i++) {

        const button = createBtn(i, false);
        button.addEventListener('click', handleDateClick);
        dates.appendChild(button);
    };

    const firstOfNextMOnth = new Date(year, month + 1, 1);

    for (let i = firstOfNextMOnth.getDay(); i < 7; i++) {
        const text =
            firstOfNextMOnth.getDate() -
            firstOfNextMOnth.getDay() + i;

        const button = createBtn(text, true);
        dates.appendChild(button);
    };
};

const createBtn = (text, isDisabled = false) => {
    const currentDate = new Date();

    const isToday =
        currentDate.getDate() === text &&
        currentDate.getFullYear() === year &&
        currentDate.getMonth() === month;
        
    const selected =
        selectedDate.getDate() === text &&
        selectedDate.getFullYear() === year &&
        selectedDate.getMonth() === month;

    const button = document.createElement('button');
    button.textContent = text;
    button.disabled = isDisabled;
    button.classList.toggle('today', isToday);
    button.classList.toggle('selected', selected);
    return button;
};

displayDates();