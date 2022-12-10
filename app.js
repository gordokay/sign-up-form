const controls = document.querySelectorAll('input');
const password = document.getElementById('password');
const messageSpan = document.querySelector('#password + span');
const passwordConfirm = document.getElementById('password-confirm');

controls.forEach(control => {
  control.classList.add('indeterminate');
  control.addEventListener('focus', () => {
    control.classList.remove('indeterminate');
  }, {once: true});
});

passwordConfirm.addEventListener('input', () => {
  if(passwordConfirm.value !== password.value) {
    password.setCustomValidity('Passwords do not match');
    passwordConfirm.setCustomValidity('Passwords do not match');
    messageSpan.classList.add('no-match');
  } else {
    password.setCustomValidity('');
    passwordConfirm.setCustomValidity('');
    messageSpan.classList.remove('no-match');
  }
})