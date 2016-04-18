

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var fahren = document.getElementById("fahren");
var celc = document.getElementById("celc");
var finalTempDiv = document.getElementById("convTemp");
var finalTempDivIn =finalTempDiv.innerHTML;
var sumF= "";
var sumC= "";
var inputField = document.getElementById("tempInput");

// Create another button that, when clicked, clears any text in the input field.

function eraseText() {
  document.getElementById("tempInput").value= "";
}

function getInput(){
  var inputTemp = document.getElementById("tempInput").value;
  return inputTemp;
  console.log("temp", inputTemp);
}

console.log("Input", getInput);

function toCelsius () {
  var celsius = (getInput() -  32) / 1.8;
  return celsius;
}

function toFahrenheit () {
  var fahrenheit = (getInput() * 1.8) + 32;
  return fahrenheit;
}

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green. -->

function colorF() {
if (sumF > 90) {
  finalTempDiv.style.color = 'red';
} else if (sumF < 32) {
  finalTempDiv.style.color = 'blue';
} else {
  finalTempDiv.style.color = 'green';
}
}

function colorC() {
if (sumC > 32) {
  finalTempDiv.style.color = 'red';
} else if (sumC < 0) {
  finalTempDiv.style.color = 'blue';
} else {
  finalTempDiv.style.color = 'green';
}
}



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  if (fahren.checked === true) {
    sumF = toFahrenheit();
    var color = colorF();
    finalTempDiv.innerHTML = "<p>" + sumF + "</p>";
  } else if (celc.checked === true) {
     sumC = toCelsius();
     var color = colorC();
    finalTempDiv.innerHTML = "<p>" + sumC + "</p>";
  } else {
    console.log("Please select a temperature to convert");
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
inputField.addEventListener("keypress", pressEnter);

function pressEnter(e){
  var code = (e.keyCode ? e.keyCode : e.which);
    if(code === 13) { //Enter keycode
      determineConverter();
    }
  }




// Add an event handler to the input field that checks if the user pressed the enter key,
// and if that happens, perform the conversion.

