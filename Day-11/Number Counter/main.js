// Select increment and decrement buttons

const incrementButton = document.getElementById("increment")
const decrementButton = document.getElementById("decrement")

//  Select total count

const totalCount = document.getElementById('total-count')

// variable to track count

var count = 0

// display intial count value

totalCount.innerHTML  = count;

//  for increment count

const Increment = () => {
    count++;
    totalCount.innerHTML= count;
};

//  for decrement count

const Decrement = () => {
    count--;
    totalCount.innerHTML= count;
};

// add click event to buttons

incrementButton.addEventListener("click",Increment)
decrementButton.addEventListener("click",Decrement)
