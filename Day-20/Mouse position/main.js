const mousePosText = document.getElementById('mouse-pos');

let mousePosition = { x: undefined , y: undefined}


// window object trigger the event whenever the mouse has moved anywhere on the page.

window.addEventListener('mousemove',(e) =>{

// clientX and clientY properties of this object to get the position of the mouse on the X-coordinate and Y-coordinate.

    mousePosition = {x: e.clientX, y: e.clientY}

    mousePosText.textContent = `(${mousePosition.x} , ${mousePosition.y})`
});