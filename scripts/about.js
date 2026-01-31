(function(){
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!hamburgerBtn || !mobileMenu) return;

  // Toggle mobile menu
  hamburgerBtn.addEventListener('click', () => {
    const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', String(!expanded));

    // toggle visibility classes
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
  });

  // Close when clicking outside (mobile only)
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (window.innerWidth >= 768) return; // desktop: ignore

    if (!mobileMenu.contains(target) && !hamburgerBtn.contains(target)) {
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Close mobile menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Optional: close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('block');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

})();

