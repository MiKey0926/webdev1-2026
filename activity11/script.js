document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      mobileMenu?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    }
  });

  const accordionHeaders = document.querySelectorAll('.acc-header');

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const currentItem = header.closest('.acc-item');

      document.querySelectorAll('.acc-item').forEach((item) => {
        item.classList.remove('open');
        const body = item.querySelector('.acc-body');
        if (body) {
          body.style.maxHeight = '0px';
        }
      });

      if (currentItem) {
        currentItem.classList.add('open');
        const body = currentItem.querySelector('.acc-body');
        if (body) {
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      }
    });
  });
});
