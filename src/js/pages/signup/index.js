import { login } from '../../api/auth/login.js';
import { register } from '../../api/auth/register.js';
import { param } from '../../utility/params.js';

const signupName = document.querySelector('#signup-name');
const signupEmail = document.querySelector('#signup-email');
const signupPassword = document.querySelector('#signup-password');
const signupMessage = document.querySelector('#signup-message');
const signupButton = document.querySelector('#signup-button');

signupButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;
  const data = await register(name, email, password);
  signupValidation(data);
});

async function signupValidation(data) {
  const signupNameError = document.querySelector('#signup-name-error');
  const signupEmailError = document.querySelector('#signup-email-error');
  const signupPasswordError = document.querySelector('#signup-password-error');

  signupNameError.classList.add('hidden');
  signupNameError.innerHTML = '';
  signupEmailError.classList.add('hidden');
  signupEmailError.innerHTML = '';
  signupPasswordError.classList.add('hidden');
  signupPasswordError.innerHTML = '';
  signupMessage.classList.add('hidden');
  signupMessage.innerHTML = '';

  if (data.errors) {
    for (let i = 0; i < data.errors.length; i++) {
      if (data.errors[0].message === 'Profile already exists') {
        const message = 'Account already exists.';
        signupMessage.classList.remove('hidden');
        signupMessage.innerHTML = `<p>${message}</p>`;
      } else {
        if (data.errors[i].path[0] === 'name') {
          if (
            data.errors[0].message ===
            'Name cannot be greater than 20 characters'
          ) {
            const message = 'Names cannot be more than 20 characters long.';
            signupNameError.classList.remove('hidden');
            signupNameError.innerHTML = `<p>${message}</p>`;
          } else {
            const message =
              'Names can only use letters, numbers and underscores.';
            signupNameError.classList.remove('hidden');
            signupNameError.innerHTML = `<p>${message}</p>`;
          }
        }

        if (data.errors[i].path[0] === 'email') {
          const message = 'Only @noroff.no emails are allowed to register.';
          signupEmailError.classList.remove('hidden');
          signupEmailError.innerHTML = `<p>${message}</p>`;
        }

        if (data.errors[i].path[0] === 'password') {
          const message = 'Password must be at least 8 characters long.';
          signupPasswordError.classList.remove('hidden');
          signupPasswordError.innerHTML = `<p>${message}</p>`;
        }
      }
    }
  } else {
    const email = signupEmail.value;
    const password = signupPassword.value;
    const data = await login(email, password);
    autoLogin(data);
  }
}

async function autoLogin(data) {
  const id = param.get('id');

  if (data.errors) {
    const message = data.errors[0].message;
    signupMessage.classList.remove('hidden');
    signupMessage.innerHTML = `<p>${message}</p>`;
  } else if (!(id === null || id === '')) {
    signupMessage.classList.add('hidden');
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.accessToken);
    setTimeout((window.location = `./listing.html?id=${id}`), 100);
  } else {
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.accessToken);
    setTimeout((window.location = './index.html'), 100);
  }
}
