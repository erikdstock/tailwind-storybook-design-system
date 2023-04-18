import './button.css';

export const createButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  btn.className = ['bg-red-700', 'px-3', 'py-2','rounded-full', 'text-white' /** , mode */].join(' ');

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
