import { login } from '../../api/auth/login.js';

const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginMessage = document.querySelector('#login-message');
const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;
  const data = await login(email, password);
  loginValidation(data);
});

async function loginValidation(data) {
  if (data.errors) {
    const message = 'Invalid email or password.';
    loginMessage.classList.remove('hidden');
    loginMessage.innerHTML = `<p>${message}</p>`;
  } else {
    loginMessage.classList.add('hidden');
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.accessToken);
    setTimeout((window.location = './index.html'), 100);
  }
}
