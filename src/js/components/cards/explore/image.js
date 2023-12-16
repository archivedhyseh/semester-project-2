export function renderImage(data) {
  // container
  const container = document.createElement('div');
  container.classList.add(
    'relative',
    'flex',
    'h-96',
    'overflow-hidden',
    'rounded-md',
  );

  // image
  let image = document.createElement('img');
  if (data.media.length > 0) {
    image.src = data.media[0];
    image.alt = `${data.title}`;
    image.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'overflow-hidden',
      'rounded-lg',
      'object-cover',
    );
  } else {
    image = document.createElement('div');
    image.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'overflow-hidden',
      'rounded-lg',
      'bg-neutral-300',
      'object-cover',
    );

    const message = document.createElement('p');
    message.innerText = 'No image available';
    message.classList.add(
      'flex',
      'h-full',
      'items-center',
      'justify-center',
      'text-xl',
    );
    image.appendChild(message);
  }

  // append
  container.appendChild(image);

  // return
  return container;
}
