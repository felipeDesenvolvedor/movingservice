"use strict";var toggleElement=function(e,t){e.classList.toggle(t)},showMenu=function(){var e=document.querySelector(".js__amburguer"),t=document.querySelector(".top");e.addEventListener("click",function(){return toggleElement(t,"top__nav--aberto")})};document.addEventListener("DOMContentLoaded",function(){return showMenu()});