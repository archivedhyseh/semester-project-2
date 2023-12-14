import { login } from '../../api/auth/login.js';
import { param } from '../../utility/params.js';

const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginMessage = document.querySelector('#login-message');
const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', async (e) => {
  e.preventDefault();
  loginValidation();
});

async function loginValidation() {
  const id = param.get('id');
  const email = loginEmail.value;
  const password = loginPassword.value;

  let isEmailValid = false;
  let isPasswordValid = false;

  if (email === '') {
    const message = 'Invalid email or password.';
    loginMessage.innerHTML = `<p>${message}</p>`;
    loginMessage.classList.remove('hidden');
    isEmailValid = false;
  } else if (password === '') {
    const message = 'Invalid email or password.';
    loginMessage.innerHTML = `<p>${message}</p>`;
    loginMessage.classList.remove('hidden');
    isEmailValid = false;
  } else {
    loginMessage.classList.add('hidden');
    isEmailValid = true;
    isPasswordValid = true;
  }

  if (isEmailValid === true && isPasswordValid === true) {
    const data = await login(email, password);

    if (data.errors) {
      if (data.status === 'Unauthorized') {
        const message = 'Invalid email or password.';
        loginMessage.innerHTML = `<p>${message}</p>`;
        loginMessage.classList.remove('hidden');
      } else {
        const message = 'Something went wrong. Please try again later.';
        loginMessage.innerHTML = `<p>${message}</p>`;
        loginMessage.classList.remove('hidden');
      }
    } else {
      if (!(id === null || id === '')) {
        loginMessage.classList.add('hidden');
        localStorage.setItem('name', data.name);
        localStorage.setItem('token', data.accessToken);
        setTimeout(() => {
          window.location = `./listing.html?id=${id}`;
        }, 100);
      } else {
        loginMessage.classList.add('hidden');
        localStorage.setItem('name', data.name);
        localStorage.setItem('token', data.accessToken);
        setTimeout(() => {
          window.location = `./index.html`;
        }, 100);
      }
    }
  }
}
