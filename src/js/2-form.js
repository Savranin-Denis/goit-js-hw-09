const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

loadFormData();

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

function loadFormData() {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    formData = JSON.parse(storedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
