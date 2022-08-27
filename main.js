const menu = document.getElementById('menu');
const barOne = document.getElementById('one')
const barTwo = document.getElementById('two')
const menuItems = document.getElementById('menu-items')
menu.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    barOne.classList.toggle('cross-menu-one')
    barTwo.classList.toggle('cross-menu-two')
})