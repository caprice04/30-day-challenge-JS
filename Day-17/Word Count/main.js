let Text = document.getElementById('input');
// console.log(Text); 

let Button = document.getElementById("Count-btn");
// console.log(Button);

let wordCount = document.getElementById("word-count");
// console.log(wordCount);

Button.addEventListener("click",function(){

    let txt = Text.value;

    let wordList = txt.split(" "); // seperate the string into seperate words.

    // Find the word count by using the length of the array
    let count = wordList.length;
    
    // to display the result
    wordCount.innerHTML = count;

});

function resetCount() {
    document.getElementById("input").value = "";
    document.getElementById("word-count").innerHTML= 0;

}
