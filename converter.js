// Clear the input field using clear-input button //
function clearInput() {
    document.getElementById("temp-input").value = "";
}
  
document.getElementById("clear-input").addEventListener("click", clearInput);

// Submit Button //
var button = document.getElementById("converter");
    button.addEventListener("click", determineConverter);


function toFahrenheit(tempInput) {
    tempInput = parseFloat(tempInput);
    document.getElementById("temp-output").innerHTML = ((tempInput - 32) / 1.8).toFixed(2);
}

function toCelcius(tempInput) {
    tempInput = parseFloat(tempInput);
    document.getElementById("temp-output").innerHTML = ((tempInput * 1.8) + 32).toFixed(2);
}

function determineConverter (clickEvent) {
    var tempInput = document.getElementById("temp-input").value;
    if (document.getElementById("to-celcius").checked) {
        toFahrenheit(tempInput); 
        console.log('hi')
    } else if (document.getElementById("to-fahrenheit").checked) {
        toCelcius(tempInput);
        console.log("howdy");
    }
} 
  