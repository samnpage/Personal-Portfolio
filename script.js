let lastScrollTop = 0;
const navbar = document.querySelector(".nav");

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop < lastScrollTop) {
        // Scrolling up
        navbar.classList.add('nav-fixed');
    } else {
        // Scrolling down
        navbar.classList.remove('nav-fixed');
    }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


const toggleNavbar = () => {
    const navbarList = document.getElementById("navList");
    if (navbarList.style.display === "block") {
        navbarList.style.display = "none";
    }   else {
        navbarList.style.display = "block";
    }
}