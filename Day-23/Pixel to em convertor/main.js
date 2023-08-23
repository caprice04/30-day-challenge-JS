let inpBase = document.getElementById("in-base-px");
let inpPixel = document.getElementById("in-px");
let inpEm = document.getElementById("in-em");

//Function to convert pixels to em

let pxToEm = () => {

  let inpBaseValue = inpBase.value;
  let pxValue = inpPixel.value;

  //Checking if input field is not empty
  //If not empty then calculate the EM value

  if (pxValue.length != 0) {

    inpEm.value = pxValue / inpBaseValue;
  }

  //If empty then clear EM field
  else {
    inpEm.value = "";
  }

};

//Function to convert em to pixel

let emToPx = () => {

  let inpBaseValue = inpBase.value;
  let emValue = inpEm.value;

  //Checking if input field is not empty
  //If not empty then calculate the pixel value

  if (emValue.length != 0) {

    inpPixel.value = emValue * inpBaseValue;
  }

  //If empty then clear the PX field
  else {
    inpPixel.value = "";
  }

};

/*

//Function to calculate EM and PX when Base Font Size is changed

let calcEmPx = () => {
  //Checking if input field is not empty
  //If not empty then run emToPx()/pxToEm()
  if (inpBase.value.length != 0) {
    emToPx();
  }
  //If empty then clear PX and EM field
  else {
    inpPX.value = "";
    inpEM.value = "";
  }
};

*/

//Adding oninput event to each input field
inpPixel.oninput = pxToEm;
inpEm.oninput = emToPx;
// inpBase.oninput = calcEmPx;