// Press any key and the result will display on the page.

window.addEventListener("keydown", function(e){
    document.querySelector("p").innerHTML = e.key;
},true);