const msg1 = document.getElementById("p1") 
const msg2 = document.getElementById("p2") 
const msg3 = document.getElementById("p3") 

const answer = Math.floor(Math.random() * 100) + 1;

let NumberOfGuesses = 0;

let guessesNumber = [];

function start() {

     let userGuess = document.getElementById("guess").value

    if (userGuess < 1 || userGuess > 100) {

        alert("Please Enter a number Between 1 to 100");

    } else {
        guessesNumber.push(userGuess);

        NumberOfGuesses += 1;

        if (userGuess < answer) {

            msg1.textContent = "your guess is too low."
            msg2.textContent = "No. Of Guesses : " + NumberOfGuesses;
            msg3.textContent = "Guessed Number Are: " + guessesNumber;

        } else if (userGuess > answer) {

            msg1.textContent = "Your Guess is Too High."
            msg2.textContent = "No. Of Guesses : " + NumberOfGuesses;
            msg3.textContent = "Guessed Number Are: " + guessesNumber;

        } else if (userGuess == answer) {

            msg1.textContent = "You won It!!"
            msg2.textContent = "the Number was " + answer 
            msg3.textContent = ` You guessd it  ${NumberOfGuesses} Guesses`;
        }
    }

    
}

function resetGame() {
   
    NumberOfGuesses = 0;
    guessesNumber = [];
    msg1.textContent = "";
    msg2.textContent = "";
    msg3.textContent = "";
  }
