document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // 1) Toggle Menu (Mobile)
    // ===========================
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
  
    // ===========================
    // 2) Subscribe Email (Footer)
    // ===========================
    const subscribeInput = document.querySelector("footer input[type='text']");
    const subscribeBtn = document.querySelector("footer button");

    subscribeBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const email = subscribeInput.value.trim();
        if (!email) {
            alert("Please enter your email.");
            return;
        }

        alert("Thanks for subscribing!");
        subscribeInput.value = "";
    });

    // ===========================
    // 3) Create Account Button
    // ===========================
    const createBtn = document.querySelector("button.bg-[rgba(219,68,68,1)]");

    createBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Account Created Successfully!");
    });

    // ===========================
    // 4) Google Sign In Button
    // ===========================
    const googleBtn = document.querySelector("button.border.border-gray-400");

    googleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Google Sign In (Demo)");
    });

    // ===========================
    // 5) Log in click (footer)
    // ===========================
    const loginSpan = document.querySelector(".relative.cursor-pointer");

    loginSpan.addEventListener("click", () => {
        alert("Go to Login Page (Demo)");
    });
});