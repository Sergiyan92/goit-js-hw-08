import throttle from 'lodash.throttle';

const inputEmail = document.querySelector('[name="email"]');
const inputMessage = document.querySelector('[name="message"]');
const form = document.querySelector('.feedback-form');

inputEmail.addEventListener(
  'input',
  throttle(() => {
    const feedbackFormState = {
      email: inputEmail.value,
      message: inputMessage.value,
    };
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(feedbackFormState)
    );
  }, 500)
);
inputMessage.addEventListener(
  'input',
  throttle(() => {
    const feedbackFormState = {
      email: inputEmail.value,
      message: inputMessage.value,
    };
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(feedbackFormState)
    );
  }, 500)
);

const formDefault =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
if (formDefault) {
  inputEmail.value = formDefault.email || '';
  inputMessage.value = formDefault.message || '';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const feedbackFormState = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
  console.log(feedbackFormState);
  localStorage.removeItem('feedback-form-state');
  inputEmail.value = '';
  inputMessage.value = '';
});
