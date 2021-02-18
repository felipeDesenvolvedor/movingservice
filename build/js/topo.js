const toggleElement = (element, className) => {
    element.classList.toggle(className)
}

const showMenu = () => {
    const menuAmburguer = document.querySelector('.js__amburguer');
    const top  = document.querySelector('.top');
    
    menuAmburguer.addEventListener('click', () => toggleElement(top, 'top__nav--aberto'));
}

document.addEventListener('DOMContentLoaded', () => showMenu());