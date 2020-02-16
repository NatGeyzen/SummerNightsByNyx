const menuButton = document.getElementById('js--menu-button');
const navContainer = document.getElementById('js--nav-container');
const closeButton = document.getElementById('js--close-button');

function openMenu() {
    if (menuButton.classList.contains('active')) {
        menuButton.classList.remove('active');
        navContainer.classList.add('active');
    }
}

function closeMenu() {
    if (navContainer.classList.contains('active')) {
        navContainer.classList.remove('active');
        menuButton.classList.add('active');
    }
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);