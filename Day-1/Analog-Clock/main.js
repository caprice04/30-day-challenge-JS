const secondHand = document.querySelector(".sec-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate(){
//  Date class from which we can get all kinds of things like current date, hours, minutes, seconds

    const now = new Date();
//------seconds------------

    const seconds = now.getSeconds();
    const secondsDeg = ((seconds / 60) *360) +90;

     // I have stored in 'secondsDegrees' how the second hand will rotate.
    //I divided by 60 because 1 minute is equal to 60 seconds.
   // I multiplied by 360 because a circle is formed by 360 degrees.

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    //-----------minutes------------

    const mins = now.getMinutes();
    const minuteDeg = ((mins / 60) * 360)+ ((seconds/ 60)*6) +90;
    minHand.style.transform = `rotate(${minuteDeg}deg)`;

    // I have stored in 'minsDegrees' how to turn the hand of the minute.
    // I divided by 60 because 1 hour is equal to 60 minutes.
   // Added second hand position with minutes. Because the minute's hand is in the right place depending on the second.

   const hour = now.getHours();
   const hourDeg = ((hour / 12) * 360) + ((mins/60)*30) + 90;
   hourHand.style.transform = `rotate(${hourDeg}deg)`;

}
setInterval(setDate,1000);
setDate();

// We need to call this rotate() function every 1 second (1000 milliseconds).




