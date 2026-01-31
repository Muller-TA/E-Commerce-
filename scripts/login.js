

    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburgerBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("block"); 
    });
    document.addEventListener("click", (e) => {
        if (
            !mobileMenu.contains(e.target) &&
            !hamburgerBtn.contains(e.target)
        ) {
            mobileMenu.classList.add("hidden");
            mobileMenu.classList.remove("block");
        }
    });
  
