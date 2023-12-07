import { login } from '../../api/auth/login.js';
import { param } from '../../utility/params.js';

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
  const id = param.get('id');

  if (data.errors) {
    const message = 'Invalid email or password.';
    loginMessage.classList.remove('hidden');
    loginMessage.innerHTML = `<p>${message}</p>`;
  } else if (!(id === null || id === '')) {
    loginMessage.classList.add('hidden');
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.accessToken);
    setTimeout((window.location = `./listing.html?id=${id}`), 100);
  } else {
    loginMessage.classList.add('hidden');
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.accessToken);
    setTimeout((window.location = './index.html'), 100);
  }
}
