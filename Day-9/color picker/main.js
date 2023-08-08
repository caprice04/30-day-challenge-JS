const colorPicker = document.getElementById("color-picker")

const colorValue = document.getElementById("value");

colorPicker.onchange = function(){

    colorValue.innerHTML = colorPicker.value;
    colorValue.style.color = colorPicker.value;
    
}