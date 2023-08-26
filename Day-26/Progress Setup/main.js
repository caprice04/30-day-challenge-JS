const progressBar= document.querySelector("progress");
const previous= document.querySelector("#prev");
const nextTab = document.querySelector("#next");
const Round = document.querySelectorAll(".circle");

// console.log(Round);


const update = () =>{

    Round.forEach((circle, i) => {
        
        if (i < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const active = document.querySelectorAll(".active");
    const width = ((active.length - 1) / (Round/length - 1)) *100;
    
    
    previous.disabled = currentActive === 1;
    nextTab.disabled = currentActive === Round.length;
};

let currentActive =1;

// for next button 
nextTab.addEventListener("click", () =>{
    currentActive++;

    if(currentActive > Round.length) {
        currentActive= Round.length;
    }
     update();

} );

// for prev btn

previous.addEventListener("click", () =>{
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }
     update();
});

update();



