const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navMenu.hidden = isOpen;
  });
}

const imagePlaceholders = document.querySelectorAll('.image-placeholder');
imagePlaceholders.forEach((placeholder) => {
  const img = placeholder.querySelector('img');
  if (!img) return;

  img.addEventListener('error', () => {
    placeholder.classList.add('is-empty');
  });

  img.addEventListener('load', () => {
    placeholder.classList.remove('is-empty');
  });

  if (img.complete && img.naturalWidth === 0) {
    placeholder.classList.add('is-empty');
  }
});
