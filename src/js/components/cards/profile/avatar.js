export function renderAvatar(data) {
  // image container
  const container = document.createElement('div');
  container.classList.add('m-3', 'flex', 'flex-row', 'justify-center');

  // image wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add(
    'relative',
    'aspect-square',
    'h-32',
    'w-32',
    'overflow-hidden',
    'rounded-full',
    'sm:h-40',
    'sm:w-40',
  );

  // image
  const image = document.createElement('img');
  if (data.avatar === null || data.avatar === '') {
    image.src = './src/images/avatar.png';
    image.alt = `Avatar of ${data.name}`;
    image.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'overflow-hidden',
      'object-cover',
    );
  } else {
    image.src = data.avatar;
    image.alt = `Avatar of ${data.name}`;
    image.classList.add(
      'absolute',
      'h-full',
      'w-full',
      'overflow-hidden',
      'object-cover',
    );
  }

  // append
  wrapper.appendChild(image);
  container.appendChild(wrapper);

  // return
  return container;
}
