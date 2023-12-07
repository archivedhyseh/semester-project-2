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
  const image = document.createElement('img');
  image.classList.add(
    'absolute',
    'h-full',
    'w-full',
    'overflow-hidden',
    'rounded-lg',
    'object-cover',
  );
  if (data.media.length > 0) {
    image.src = data.media[0];
  }

  // append
  container.appendChild(image);

  // return
  return container;
}
