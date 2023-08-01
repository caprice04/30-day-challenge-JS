
 const button= document.querySelector("#btn")

 function generateColor(){

    // In this example we will use the HEX code, 0 to 9 and a to f.
    const hexArray = "0123456789ABCDEF";

    let code = '';

    for(let i = 0; i < 6; i++){
        code += hexArray[Math.floor(Math.random()*16)]
    }
    return `#${code}`
    
}

 button.addEventListener('click', () =>{
    // body background
    document.body.style.backgroundColor= generateColor();
   

 });

