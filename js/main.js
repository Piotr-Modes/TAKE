
window.onload = function(){

function toggleClass(id,cl) {
    const element = document.getElementById(id);

    if (element.classList) { 
        element.classList.toggle(cl);
    } else {
        const i = element.className.split(" ").indexOf(cl);

        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push(cl);
            element.className = classes.join(" "); 
    }
}
    
function toggleNav(){
    toggleClass("navIcon","navigation__icon--open");
    toggleClass("navButton","navigation__button--open");
    toggleClass("navBackground","navigation__background--open");
    toggleClass("navList","navigation__nav--open");
}

    
document.getElementById("navButton").addEventListener("click", toggleNav);
    
const classname = document.getElementsByClassName("navigation__item");   
    
Array.from(classname).forEach(function(element){
      element.addEventListener('click', toggleNav);
    });

    
}















