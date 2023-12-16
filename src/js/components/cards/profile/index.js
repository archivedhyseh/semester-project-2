import { renderAvatar } from './avatar.js';
import { renderInformation } from './information.js';

export function renderProfile(data) {
  // container
  const conatiner = document.querySelector('#profile-container');
  conatiner.innerHTML = '';

  // wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add(
    'flex',
    'w-full',
    'flex-col',
    'gap-5',
    'sm:flex-row',
    'sm:justify-between',
  );

  // edit
  const button = document.createElement('a');
  button.href = './profile-edit.html';
  button.classList.add(
    'h-fit',
    'w-full',
    'cursor-pointer',
    'justify-end',
    'rounded-md',
    'bg-neutral-900',
    'px-3',
    'py-2',
    'text-center',
    'font-bold',
    'text-white',
    'transition',
    'duration-200',
    'hover:bg-neutral-600',
    'sm:w-fit',
  );
  button.innerText = 'Edit profile';

  const avatar = renderAvatar(data);
  const information = renderInformation(data);

  conatiner.appendChild(avatar);
  wrapper.appendChild(information);
  wrapper.appendChild(button);
  conatiner.appendChild(wrapper);
}
