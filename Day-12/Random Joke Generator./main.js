const Button=document.getElementById("btn")
//  console.log(Button);

const jokeSection =document.getElementById("joke-section")
// console.log(jokeSection);

// for API 

let API = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function showJoke() {
    // for remove content-fade 

    jokeSection.classList.remove("content-fade")

    // for API


     fetch(API)
     .then((response) => response.json())
     .then((data) => {
        jokeSection.textContent = data.joke;

        jokeSection.classList.add("content-fade");
     });

}
showJoke();

Button.addEventListener('click',showJoke);