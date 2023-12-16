export function renderInformation(data) {
  // container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col', 'flex-wrap', 'gap-5');

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('flex', 'flex-col');

  // name
  const name = document.createElement('h2');
  name.classList.add('text-2xl', 'font-bold');
  name.innerText = data.name;

  // email
  const email = document.createElement('p');
  email.classList.add('text-neutral-600');
  email.innerText = data.email;

  // stats
  const stats = renderStats(data);

  // append
  wrapper.appendChild(name);
  wrapper.appendChild(email);
  container.appendChild(wrapper);
  container.appendChild(stats);

  // return
  return container;
}

function renderStats(data) {
  // container
  const container = document.createElement('ul');
  container.classList.add('flex', 'flex-row', 'flex-wrap', 'gap-3');

  // credits
  const credits = document.createElement('li');
  credits.innerText = `${data.credits} credits`;

  // wins
  const wins = document.createElement('li');
  wins.innerText = `${data.wins.length} wins`;

  // listings
  const listings = document.createElement('li');
  listings.innerText = `${data.listings.length} listings`;

  // append
  container.appendChild(credits);
  container.appendChild(wins);
  container.appendChild(listings);

  // return
  return container;
}
