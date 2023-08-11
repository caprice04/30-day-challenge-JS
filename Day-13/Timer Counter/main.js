// Select Every Count 
const CountContainer = document.querySelectorAll(".count-digit")
// console.log(CountContainer);


// select btn

const startBtn = document.getElementById("start-timer")
const stopBtn = document.getElementById("stop-timer")
const resetBtn = document.getElementById("reset-timer")

// console.log(resetButton);

// default value time

const defaultValue = 45 * 60; 
// if u want change hours period then here. 45 * 60

// variable to the time

 let countDownTime = defaultValue;

 // variable to store time interval

 let timerID;

 // track time is running or not

 let isStop= true;

 // Function for time string

 const findTimeString = () => {

// //  declares a variable named minute and assigns value.

    let minutes = String(Math.trunc(countDownTime / 60))

// Math.trunc(countDownTime / 60) calculates the number of minutes remaining.
// 'countDownTime' is expected to be a variable or value representing some time duration.
// The division by 60 converts the duration from seconds to minutes.
// Math.trunc is used to get the integer part of the result, effectively rounding down.
// String(...) converts the result to a string.

    let seconds = String(countDownTime % 60)

    if(minutes.length === 1) {
        minutes = '0' + minutes;
    } 

     if(seconds.length === 1) {
        seconds = '0' + seconds;
     }
     return minutes + seconds;

 };

 // start coundown

 const startTimer = () => {
    if(isStop) {
        isStop = false;
        timerID = setInterval(runCountDown, 1000)

    }
 };

 // stop countdown 

 const stopTimer = () => {
    isStop = true
    if(timerID) {
        clearInterval(timerID)
    }
 };

 // reset countdown 

 const resetTimer = () => {
    stopTimer() 
    countDownTime = defaultValue
    renderTime();    // baad mein
 };

 // onclick event on button

 startBtn.onclick = startTimer;
 resetBtn.onclick = resetTimer;
 stopBtn.onclick = stopTimer;


// display countdown on screen

const renderTime = () => {
    const time = findTimeString();
    CountContainer.forEach((count,index) => {
        count.innerHTML = time.charAt(index);

// charAt() method returns the character at a specified index (position) in a string.

    });


};

// function to execute timer

const runCountDown = () => {
    // decrement time
    countDownTime -= 1;

    renderTime();


// timeout on zero

if(countDownTime === 0) {
    stopTimer();
    }

};









