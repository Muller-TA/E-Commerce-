(function () {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburgerBtn || !mobileMenu) return;

  // Toggle mobile menu
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden');
    hamburgerBtn.setAttribute('aria-expanded', String(!isHidden));
  });

  // Close when clicking outside (mobile only)
  document.addEventListener('click', (e) => {
    if (window.innerWidth >= 768) return;
    if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Ensure menu closed when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
})();
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('dot-active'));
    dot.classList.add('dot-active');
  });
});
