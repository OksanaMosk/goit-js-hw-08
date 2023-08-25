import throttle from 'lodash.throttle';
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');
const KEY = "feedback - form - state"
const form= document.querySelector('.feedback-form');
  const output = localStorage.getItem(KEY,
    JSON.stringify([emailEl.value, messageEl.value])
  );

buttonEl.addEventListener('click', () => {
  localStorage.setItem(
   KEY,
    JSON.stringify([emailEl.value, messageEl.value])
  );
});

updateOutput();
form.addEventListener("submit", saveMessage);

function saveMessage(evt) {
  evt.preventDefault();
  localStorage.setItem(
    KEY,
  ([form.elements.email.value, form.elements.message.value])
  );
  updateOutput();
  form.reset();
}


function updateOutput() {
  output.textContent = localStorage.getItem(KEY) || "";
}

/*buttonEl('click', throttle(onClear, 500));
function onClear({ seconds }) {
  localStorage.setItem('feedback-form-state', seconds);
}*/
