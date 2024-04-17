let lastScrollTop = 0;
const navbar = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");

window.addEventListener('scroll', () => {
    showDropdown();
});


const toggleNavbar = () => {
    const navbarList = document.getElementById("navList");
    if (navbarList.style.display === "block") {
        navbarList.style.display = "none";
    } else {
        navbarList.style.display = "block";
    }
}

const showDropdown = () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        // Scrolling up
        navbar.classList.add('nav-fixed');

        // Check if navbar list is open and scrolling up, then close it
        if (navList.style.display === "block") {
            toggleNavbar();
        }
    } else {
        // Scrolling down
        navbar.classList.remove('nav-fixed');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}
