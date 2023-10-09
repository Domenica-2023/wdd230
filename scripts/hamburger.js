let toggleMenu = _ => {
    const menuButton = document.getElementById('menu-button');
    const menuItems = document.getElementsByClassName('menu-items');


    menuItems.classList.toggle('opened');
    menuButton.classList.toggle('opened');


}