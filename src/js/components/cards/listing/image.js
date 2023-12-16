export function renderImage(data) {
  // image container
  const container = document.createElement('div');
  container.classList.add(
    'relative',
    'min-h-[24rem]',
    'overflow-hidden',
    'rounded-md',
    'sm:min-h-[36rem]',
    'md:h-[38rem]',
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
      'rouned-lg',
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
