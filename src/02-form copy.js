
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(e) {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        form.elements.email.value = email || '';
        form.elements.message.value = message || '';
    }
}

function onFormSubmit(e) {
    e.preventDefault();
    
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    const formData = {
        email,
        message,
    };

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}