const refs = {
  form: document.querySelector('.login-form'),
  inputMailEl: document.querySelector('input[type="email"]'),
  inputPassEl: document.querySelector('input[type="password"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const elem = event.currentTarget.elements;

  if (
    elem.password.value !== null &&
    elem.password.value.trim() !== '' &&
    elem.email.value !== null &&
    elem.email.value.trim() !== ''
  ) {
    const formData = {
      email: elem.email.value,
      password: elem.password.value,
    };
    console.log(formData);
    refs.form.reset();
  } else {
    alert('Fill all fields!');
  }
}
