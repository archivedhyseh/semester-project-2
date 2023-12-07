import { getHighestBid } from '../../../utility/bids.js';
import { timeDistance } from '../../../utility/timers.js';
import { param } from '../../../utility/params.js';

export function renderPrimary(data) {
  // primary
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col', 'gap-5');

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'flex-col', 'gap-5');

  // title
  const title = document.createElement('h2');
  title.classList.add('text-5xl', 'font-bold');
  title.innerText = data.title;

  // current bid
  const bid = renderBids(data);

  // ending time
  const timer = renderEnding(data);

  // checks if logged in
  const loginChecker = checkLoggedIn();

  // append
  container.appendChild(title);
  wrapper.appendChild(bid);
  wrapper.appendChild(timer);
  wrapper.appendChild(loginChecker);
  container.appendChild(wrapper);

  console.log(container);
  return container;
}

function renderBids(data) {
  // container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col');

  // label
  const label = document.createElement('p');
  label.classList.add('text-neutral-600');
  label.innerText = 'Current bid';

  // current bid
  const bid = document.createElement('p');
  bid.classList.add('text-2xl');
  bid.innerText = getHighestBid(data.bids);

  // append
  container.appendChild(label);
  container.appendChild(bid);

  // return
  return container;
}

function renderEnding(data) {
  // container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col');

  // label
  const label = document.createElement('div');
  label.classList.add('text-neutral-600');
  label.innerText = 'Ending in';

  // ending time
  const timer = document.createElement('p');
  timer.classList.add('text-2xl');
  timer.innerText = timeDistance(data.endsAt);
  setInterval(() => {
    timer.innerText = timeDistance(data.endsAt);
  }, 1000);

  // append
  container.appendChild(label);
  container.appendChild(timer);

  // return
  return container;
}

function checkLoggedIn() {
  // checks for token
  const token = localStorage.getItem('token');
  let container;

  // if statement
  if (token === null || token === '') {
    console.log('no token');
    const login = renderNotloggedIn();
    container = login;
    return container;
  } else {
    console.log('token found');
    const bid = renderIsLoggedIn();
    container = bid;
    return container;
  }
}

function renderNotloggedIn() {
  const id = param.get('id');
  console.log(id);

  // container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col', 'gap-2');

  // label
  const label = document.createElement('p');
  label.classList.add('text-neutral-600');
  label.innerText = 'You must be logged in to place a bid';

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'flex-row', 'gap-3');

  // login button
  const loginBtn = document.createElement('button');
  loginBtn.classList.add(
    'w-full',
    'cursor-pointer',
    'rounded-md',
    'bg-neutral-900',
    'px-3',
    'py-2',
    'font-bold',
    'text-white',
  );
  loginBtn.innerText = 'Log in';
  loginBtn.addEventListener('click', () => {
    window.location = `./login.html?id=${id}`;
  });

  // signup button
  const signupBtn = document.createElement('button');
  signupBtn.classList.add(
    'w-full',
    'cursor-pointer',
    'rounded-md',
    'bg-neutral-900',
    'px-3',
    'py-2',
    'font-bold',
    'text-white',
  );
  signupBtn.innerText = 'Sign up';
  signupBtn.addEventListener('click', () => {
    window.location = `./signup.html?id=${id}`;
  });

  // append
  container.appendChild(label);
  wrapper.appendChild(loginBtn);
  wrapper.appendChild(signupBtn);
  container.appendChild(wrapper);

  // return
  return container;
}

function renderIsLoggedIn() {
  // container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col', 'gap-2');

  // label
  const label = document.createElement('p');
  label.classList.add('text-neutral-600');
  label.innerText = 'Amount to bid';

  // form
  const form = document.createElement('div');
  form.classList.add('flex', 'flex-row', 'gap-3');

  // form input
  const input = document.createElement('input');
  input.classList.add(
    'w-full',
    'rounded-md',
    'border',
    'border-neutral-300',
    'px-3',
    'py-2',
    'placeholder:text-neutral-600',
  );
  input.type = 'number';
  input.min = '1';
  input.placeholder = '0';

  // form submit button
  const submit = document.createElement('button');
  submit.classList.add(
    'w-full',
    'cursor-pointer',
    'rounded-md',
    'bg-neutral-900',
    'font-bold',
    'text-white',
  );
  submit.innerText = 'Place bid';
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('clicked');
  });

  // append
  container.appendChild(label);
  form.appendChild(input);
  form.appendChild(submit);
  container.appendChild(form);

  // return
  return container;
}
