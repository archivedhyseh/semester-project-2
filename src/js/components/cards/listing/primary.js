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
  const loginChecker = checkLoggedIn(data);

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
  const highestBid = getHighestBid(data.bids);
  if (highestBid === undefined || highestBid.length <= 0) {
    bid.innerText = 'No current bids';
  } else {
    bid.innerText = `${highestBid.amount} credits`;
  }

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

function checkLoggedIn(data) {
  // checks for token
  const token = localStorage.getItem('token');
  let container;

  const seller = data.seller.name;
  const name = localStorage.getItem('name');

  // if statement
  if (token === null || token === '') {
    console.log('no token');
    const login = renderNotloggedIn();
    container = login;
    return container;
  } else if (seller === name) {
    const options = renderEditDelete();
    container = options;
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
    'transition',
    'duratiion-200',
    'hover:bg-neutral-600',
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
    'transition',
    'duratiion-200',
    'hover:bg-neutral-600',
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

function renderEditDelete() {
  const id = param.get('id');
  console.log(id);

  // container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col', 'gap-2');

  // label
  const label = document.createElement('p');
  label.classList.add('text-neutral-600');
  label.innerText = 'Options';

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'flex-row', 'gap-3');

  // login button
  const editBtn = document.createElement('button');
  editBtn.classList.add(
    'w-full',
    'cursor-default',
    'rounded-md',
    'bg-neutral-900',
    'px-3',
    'py-2',
    'font-bold',
    'text-white',
    'transition',
    'duration-200',
    'hover:bg-neutral-600',
  );
  editBtn.innerText = 'Edit';

  // signup button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add(
    'w-full',
    'cursor-default',
    'rounded-md',
    'bg-neutral-900',
    'px-3',
    'py-2',
    'font-bold',
    'text-white',
    'transition',
    'duration-200',
    'hover:bg-neutral-600',
  );
  deleteBtn.innerText = 'Delete';

  // append
  container.appendChild(label);
  wrapper.appendChild(editBtn);
  wrapper.appendChild(deleteBtn);
  container.appendChild(wrapper);

  // return
  return container;
}

function renderIsLoggedIn() {
  // container
  const container = document.createElement('form');
  container.classList.add('flex', 'flex-col', 'gap-2');

  // label
  const label = document.createElement('label');
  label.classList.add('text-neutral-600');
  label.htmlFor = 'bid-amount';
  label.innerText = 'Amount to bid';

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'flex-row', 'gap-3');

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
  input.id = 'bid-amount';
  input.type = 'number';
  input.min = '1';
  input.placeholder = '0';

  // form button
  const button = document.createElement('button');
  button.classList.add(
    'w-full',
    'cursor-pointer',
    'rounded-md',
    'bg-neutral-900',
    'px-3',
    'py-2',
    'font-bold',
    'text-white',
    'transition',
    'duration-200',
    'hover:bg-neutral-600',
  );
  button.id = 'bid-button';
  button.innerText = 'Place bid';

  // feedback
  const feedback = document.createElement('div');
  feedback.classList.add('hidden');
  feedback.id = 'bid-message';

  // append
  container.appendChild(label);
  wrapper.appendChild(input);
  wrapper.appendChild(button);
  container.appendChild(wrapper);
  container.appendChild(feedback);

  // return
  return container;
}
