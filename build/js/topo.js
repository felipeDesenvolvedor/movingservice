const toggleElement = (element, className) => {
    element.classList.toggle(className)
}

const showMenu = () => {
    const menu = document.querySelector('.js__amburguer');
    menu.addEventListener('click', () => toggleElement(menu, 'top__nav--aberto'));
}

document.addEventListener('DOMContentLoaded', () => showMenu());