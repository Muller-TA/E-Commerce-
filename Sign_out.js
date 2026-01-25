document.addEventListener("DOMContentLoaded", () => {

  // ===========================
  // 1) Toggle Menu (Mobile)
  // ===========================
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });


  // ===========================
  // 2) Subscribe Email (Footer)
  // ===========================
  const subscribeInput = document.querySelector("footer input[type='text']");
  const subscribeBtn = document.querySelector("footer button");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = subscribeInput.value.trim();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    alert("Thanks for subscribing! ");
    subscribeInput.value = "";
  });

  subscribeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") subscribeBtn.click();
  });


  // ===========================
  // 3) Create Account Button
  // ===========================
  const createBtn = document.querySelector("button.bg-[rgba(219,68,68,1)]");

  createBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelector("input[placeholder='Name']").value.trim();
    const email = document.querySelector("input[placeholder='Email or Phone Number']").value.trim();
    const password = document.querySelector("input[placeholder='Password']").value.trim();

    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    alert("Account Created Successfully! ");
  });


  // ===========================
  // 4) Google Sign In Button
  // ===========================
  const googleBtn = document.querySelector("button.border.border-gray-400");

  googleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Google Sign In (Demo) ");
  });


  // ===========================
  // 5) Log in click (footer)
  // ===========================
  const loginSpan = document.querySelector(".relative.cursor-pointer");

  loginSpan.addEventListener("click", () => {
    alert("Go to Login Page (Demo)");
  });


  // ===========================
  // 6) Search (Input + Enter)
  // ===========================
  const searchInput = document.querySelector("header input[type='text']");
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const val = searchInput.value.trim();
      if (!val) {
        alert("Please type something to search.");
        return;
      }
      alert("Searching for: " + val);
      searchInput.value = "";
    }
  });

});
