export function renderSecondary(data) {
  // container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-col', 'gap-5');

  // description
  const description = renderDescription(data);

  // others
  const others = renderOthers(data);

  // append
  container.appendChild(description);
  container.appendChild(others);

  // return
  console.log(container);
  return container;
}

function renderDescription(data) {
  // container
  const container = document.createElement('div');

  // label
  const label = document.createElement('h3');
  label.classList.add('text-xl');
  label.innerText = 'Description';

  // description
  const description = document.createElement('p');
  description.classList.add('text-neutral-800');
  description.innerText = data.description;

  // append
  container.appendChild(label);
  container.appendChild(description);

  // return
  return container;
}

function renderOthers(data) {
  // container
  const container = document.createElement('div');

  // label
  const label = document.createElement('h3');
  label.classList.add('text-xl');
  label.innerText = 'Others';

  // listing id
  const idParagraph = document.createElement('p');
  idParagraph.classList.add('font-bold');
  idParagraph.innerText = 'Listing id: ';

  const id = document.createElement('span');
  id.classList.add('font-normal', 'text-neutral-800');
  id.innerText = data.id;

  // last edited
  const editedParagraph = document.createElement('p');
  editedParagraph.classList.add('font-bold');
  editedParagraph.innerText = 'Last edited: ';

  const edited = document.createElement('span');
  edited.classList.add('font-normal', 'text-neutral-800');
  edited.innerText = getLastEdited(data.updated);

  // append
  container.appendChild(label);
  idParagraph.appendChild(id);
  container.appendChild(idParagraph);
  editedParagraph.appendChild(edited);
  container.appendChild(editedParagraph);

  // return
  return container;
}

const getLastEdited = (date) => {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  let updated = formatted.replace(', ', ' ');
  return updated;
};
