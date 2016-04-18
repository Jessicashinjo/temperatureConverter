
// <!-- Write a program that will convert a temperature from fahrenheit to celsius,
// or from celsius to fahrenheit.

// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key,
// and if that happens, perform the conversion.





function getInput(){
  var inputTemp = document.getElementById("tempInput").innerHTML;
  return inputTemp;
}

function toCelsius () {
  var celsius = (getInput() -  32) * 5 / 9;
  return celsius;
}

function toFahrenheit () {
  var fahrenheit = (getInput() *  9/5) + 32;
  return fahrenheit;
}

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green. -->


// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var fahren = document.getElementById("fahren");
var celc = document.getElementById("celc");
var finalTempDiv = document.getElementById("convTemp");



// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  if (fahren.checked === true) {
    var sumF = toFahrenheit();
    finalTempDiv.innerHTML = "<p>" + sumF + "</p>";
  } else if (celc.checked === true) {
     var sumC = toCelsius();
    finalTempDiv.innerHTML = "<p>" + sumC + "</p>";
  } else {
    console.log("Please select a temperature to convert");
  }
  console.log(determineConverter);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);




