const goSignal = document.getElementById('goLight')
const slowSignal = document.getElementById('slowLight')
const stopSignal = document.getElementById('stopLight')



function activateGreenSignal () {
    clearLights();
    goSignal.style.backgroundColor = 'green'

}

function activateYellowSignal () {
    clearLights();
    slowSignal.style.backgroundColor = 'yellow';


}

function activateRedSignal () {
    clearLights();
    stopSignal.style.backgroundColor = 'red';

}

function clearLights() {
   goSignal.style.backgroundColor = '#111'
   slowSignal.style.backgroundColor = '#111'
   stopSignal.style.backgroundColor = '#111'
}



setTimeout(activateGreenSignal, 1000);
setTimeout(activateYellowSignal, 3000);
setTimeout(activateRedSignal, 5000);
