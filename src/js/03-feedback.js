import throttle from 'lodash.throttle';
const allForms = {
  form: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input'),
  messageEl: document.querySelector('textarea'),
};
const formData = {
  email: '',
  message: '',
};
updateOutput();

allForms.form.addEventListener('input', throttle(onClear, 500));

allForms.form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
  console.log(formData);
});

function onClear(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function updateOutput() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data === null) {
    return;
  }

  allForms.emailEl.value = data.email || '';
  allForms.messageEl.value = data.message || '';
  formData.email = data.email || '';
  formData.message = data.message || '';
}
