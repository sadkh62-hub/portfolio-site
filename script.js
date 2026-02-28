// Navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if(window.scrollY > 50) {
        nav.style.backgroundColor = "#fff";
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    } else {
        nav.style.backgroundColor = "transparent";
        nav.style.boxShadow = "none";
    }
});