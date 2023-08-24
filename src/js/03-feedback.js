import throttle from 'lodash.throttle';
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');
const feedbackFormOutput = document.querySelector('.feedback-form');
buttonEl.addEventListener('click', () => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify([emailEl.value, messageEl.value])
  );
});

form.addEventListener('submit', saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(
    'feedback - form - state',
    form.elements.messageEl.value
  );
  updateOutput();
  form.reset();
}

function updateOutput() {
  feedbackFormOutput.textContent =
    localStorage.getItem('feedback - form - state') || '';
}

/*buttonEl('click', throttle(onClear, 500));
function onClear({ seconds }) {
  localStorage.setItem('feedback-form-state', seconds);
}*/
