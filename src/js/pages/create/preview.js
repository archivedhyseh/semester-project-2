export function updatePreview(input) {
  // container
  const container = document.querySelector('#preview-container');
  container.innerHTML = '';

  // replace
  const image = document.createElement('img');
  image.classList.add(
    'absolute',
    'h-full',
    'w-full',
    'overflow-hidden',
    'rounded-lg',
    'object-cover',
  );
  image.src = input;

  container.appendChild(image);
}

export function resetPreview() {
  // container
  const container = document.querySelector('#preview-container');
  container.innerHTML = '';

  // replace
  const image = document.createElement('div');
  image.classList.add(
    'absolute',
    'h-full',
    'w-full',
    'overflow-hidden',
    'rounded-lg',
    'bg-neutral-300',
    'object-cover',
  );

  container.appendChild(image);
}
