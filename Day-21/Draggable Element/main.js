const drag = document.getElementById("draggable")

let posX = 0; posY = 0; mouseX = 0; mouseY = 0;

drag.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown(e) {
    e.preventDefault();

// calculates the posX and posY variables by subtracting the position of the draggable element from the position of the mouse cursor. 

    posX = e.clientX - drag.offsetLeft;
    posY = e.clientY - drag.offsetTop;

    window.addEventListener ('mousemove',moveElement, false);

}

function mouseUp() {
    window.removeEventListener('mousemove',moveElement,false);
}

function moveElement(e) {

    mouseX = e.clientX - posX;
    mouseY = e.clientY - posY;
    drag.style.left = mouseX + 'px';
    drag.style.top  = mouseY + 'px';
 
}







