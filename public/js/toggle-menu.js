const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('menu-superior-list');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('menu-superior-list--show');
})