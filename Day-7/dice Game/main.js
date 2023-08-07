let dice ={  // dice have two properties

    sides : 6,
    roll: function () {
        let randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

// for print roll on poge

function printNumber(number) {
    let placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = number;

}


// for button 

const Button = document.getElementById("btn");

Button.onclick =function() {
    let result = dice.roll();
    printNumber(result);
}

