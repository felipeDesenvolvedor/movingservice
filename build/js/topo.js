const toggleElement = (element, className) => {
    element.classList.toggle(className)
}

const showMenu = () => {
    const menuAmburguer = document.querySelector('.js__amburguer');
    const topContainer  = document.querySelector('.top__container');
    
    menuAmburguer.addEventListener('click', () => toggleElement(topContainer, 'top__nav--aberto'));
}

document.addEventListener('DOMContentLoaded', () => showMenu());