export function renderAvatar(data) {
  // image container
  const container = document.createElement('div');
  container.classList.add('flex', 'flex-row', 'justify-center');

  // image wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add(
    'relative',
    'aspect-square',
    'h-32',
    'w-32',
    'overflow-hidden',
    'rounded-full',
  );

  // image
  const image = document.createElement('img');
  image.classList.add(
    'absolute',
    'h-full',
    'w-full',
    'overflow-hidden',
    'object-cover',
  );
  image.src = data.avatar;

  // append
  wrapper.appendChild(image);
  container.appendChild(wrapper);

  // return
  return container;
}
