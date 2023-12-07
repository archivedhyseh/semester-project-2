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
  const image = document.createElement('img');
  image.classList.add(
    'absolute',
    'h-full',
    'w-full',
    'overflow-hidden',
    'rouned-lg',
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
