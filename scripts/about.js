document.addEventListener('DOMContentLoaded', () => {
  // Get all the cards
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    // Delete button (if exists)
    const deleteBtn = box.querySelector('.delete-btn');
    if(deleteBtn) {
      deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        box.remove();
        updateWishlistCount();
      });
    }

    // Add To Cart button (if exists)
    const addBtn = box.querySelector('.add-btn');
    if(addBtn) {
      addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const h3Elem = box.querySelector('h3');
        const title = h3Elem ? h3Elem.innerText : 'Item';
        alert(`${title} added to cart!`);
      });
    }
  });

  // Update wishlist counter
  function updateWishlistCount() {
    const countElem = document.querySelector('#wishlist-count');
    if(countElem) {
      countElem.innerText = document.querySelectorAll('.box').length;
    }
  }

  // Update counter on page load
  updateWishlistCount();
});
