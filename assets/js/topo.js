"use strict";var toggleElement=function(e,t){e.classList.toggle(t)},showMenu=function(){var e=document.querySelector(".js__amburguer");e.addEventListener("click",function(){return toggleElement(e,"top__nav--aberto")})};document.addEventListener("DOMContentLoaded",function(){return showMenu()});