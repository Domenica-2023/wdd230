const menuButton = document.getElementById('menu-button');
const menuItems = document.getElementById('menu-items');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('opened');
    if (menuButton.textContent === 'MENU')
        menuButton.textContent = 'X';
    else 
        menuButton.textContent = 'MENU'
})