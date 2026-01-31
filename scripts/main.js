  document.addEventListener('DOMContentLoaded', function() {
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      
      if (hamburgerBtn && mobileMenu) {
          // Toggle mobile menu
          hamburgerBtn.addEventListener('click', function(e) {
              e.stopPropagation();
              mobileMenu.classList.toggle('hidden');
              
              // Change hamburger icon
              if (mobileMenu.classList.contains('hidden')) {
                  hamburgerBtn.innerHTML = '☰';
              } else {
                  hamburgerBtn.innerHTML = '✕';
              }
          });
          
          // Close menu when clicking anywhere on document
          document.addEventListener('click', function(e) {
              if (!mobileMenu.classList.contains('hidden')) {
                  if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                      mobileMenu.classList.add('hidden');
                      hamburgerBtn.innerHTML = '☰';
                  }
              }
          });
          // اختيار العناصر
const dropdownButton = document.getElementById('profileDropdownButton');
const dropdownMenu = document.getElementById('profileDropdown');

// عند الضغط على الأيقونة
dropdownButton.addEventListener('click', function(event) {
  event.stopPropagation(); // منع إغلاق القائمة مباشرة
  dropdownMenu.classList.toggle('hidden');
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener('click', function(event) {
  if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.add('hidden');
  }
});

// إغلاق القائمة عند الضغط على مفتاح Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    dropdownMenu.classList.add('hidden');
  }
});
          // Close menu when clicking on menu links
          const mobileLinks = mobileMenu.querySelectorAll('a');
          mobileLinks.forEach(link => {
              link.addEventListener('click', function() {
                  mobileMenu.classList.add('hidden');
                  hamburgerBtn.innerHTML = '☰';
              });
          });
      }
  });
  // عناصر DOM
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menuToggle');
  const closeSidebarBtn = document.getElementById('closeSidebar');
  const overlay = document.getElementById('overlay');
  
  // فتح الشريط الجانبي
  function openSidebar() {
      sidebar.classList.remove('-translate-x-full');
      sidebar.classList.add('translate-x-0');
      overlay.classList.remove('hidden');
      setTimeout(() => overlay.classList.add('opacity-100'), 10);
  }
  
  // إغلاق الشريط الجانبي
  function closeSidebar() {
      sidebar.classList.remove('translate-x-0');
      sidebar.classList.add('-translate-x-full');
      overlay.classList.remove('opacity-100');
      setTimeout(() => overlay.classList.add('hidden'), 300);
  }
  
  // إضافة event listeners
  menuToggle.addEventListener('click', openSidebar);
  closeSidebarBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
  
  // إغلاق الشريط الجانبي عند تغيير حجم النافذة إلى شاشة كبيرة
  window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
          sidebar.classList.remove('-translate-x-full', 'translate-x-0');
          overlay.classList.add('hidden');
      }
  });
  
  // إغلاق الشريط الجانبي عند الضغط على مفتاح Escape
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          closeSidebar();
      }
  });
  
  // إغلاق الشريط الجانبي عند النقر على رابط داخل القائمة (للشاشات الصغيرة)
  document.querySelectorAll('#sidebar a').forEach(link => {
      link.addEventListener('click', function() {
          if (window.innerWidth < 768) {
              closeSidebar();
          }
      });
  });
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('productsContainer');
    const scrollLeftBtn = document.querySelector('.scrollLeftBtn');
    const scrollRightBtn = document.querySelector('.scrollRightBtn');
    
    const cardWidth = 270;
    const gap = 24;
    
    if (scrollLeftBtn && container) {
      scrollLeftBtn.addEventListener('click', () => {
        container.scrollBy({
          left: -(cardWidth + gap) * 2,
          behavior: 'smooth'
        });
      });
    }
    
    if (scrollRightBtn && container) {
      scrollRightBtn.addEventListener('click', () => {
        container.scrollBy({
          left: (cardWidth + gap) * 2,
          behavior: 'smooth'
        });
      });
    }
  });