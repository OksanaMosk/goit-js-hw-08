import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onClear, 500));
form.addEventListener('submit', saveMessage);

const formData = {};
function onClear(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function saveMessage(evt) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

(function updateOutput() {
  const emailEl = document.querySelector('.feedback-form input');
  const messageEl = document.querySelector('.feedback-form textarea');
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (data) {
    emailEl.value = data.emailEl;
    messageEl.value = data.messageEl;
  }
})();
