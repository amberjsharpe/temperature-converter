// Clear the input field using clear-input button //
function clearInput() {
    document.getElementById("temp-input").value = "";
}
  
document.getElementById("clear-input").addEventListener("click", clearInput);

// Submit Button //
var button = document.getElementById("converter");
    button.addEventListener("click", determineConverter);
// Radio Buttons //
var radioCelcius = document.getElementById("to-celcius");
var radioFahrenheit = document.getElementById("to-fahrenheit");

// Output Number //
var outputNum = document.getElementById("temp-output");

// Conversion Functions //
function toFahrenheit(tempInput) {
    tempInput = parseFloat(tempInput);
    document.getElementById("temp-output").innerHTML = ((tempInput - 32) / 1.8).toFixed(2);
}

function toCelcius(tempInput) {
    tempInput = parseFloat(tempInput);
    document.getElementById("temp-output").innerHTML = ((tempInput * 1.8) + 32).toFixed(2);
}

// When Submit Button is clicked //
function determineConverter (clickEvent) {
    var tempInput = document.getElementById("temp-input").value;
    
    if (radioCelcius.checked) {
        toFahrenheit(tempInput);
    } else if (radioFahrenheit.checked) {
        toCelcius(tempInput);
        console.log("howdy");
    }
    if (outputNum.innerHTML > 32 && radioCelcius.checked === true) {
       outputNum.style.color = "red"; 
    } else if (outputNum.innerHTML < 0 && radioCelcius.checked === true) {
        outputNum.style.color = "blue";
    } else if (radioCelcius.checked) {
        outputNum.style.color = "green";
    }


    if (outputNum.innerHTML > 90 && radioFahrenheit.checked === true) {
        outputNum.style.color = "red";
    } else if (outputNum.innerHTML < 32 && radioFahrenheit.checked === true) {
        outputNum.style.color = "blue";
    } else if (radioFahrenheit.checked) {
        outputNum.style.color = "green";
    }
} 

  