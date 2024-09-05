const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile');

// Add a click event listener to the menu icon
menu.addEventListener('click', function() {
    // Toggle the display of the mobile menu
    if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});