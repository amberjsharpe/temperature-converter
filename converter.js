// Clear the input field using clear-input button //
function clearInput() {
    document.getElementById("temp-input").value = "";
  }
  
  document.getElementById("clear-input").addEventListener("click", clearInput);

// Submit Button //


function calculate() {
    var button = document.getElementById("converter");
    button.addEventListener("click", determineConverter);
    var tempInput = document.getElementById("temp-input").value;

    function determineConverter (clickEvent) {
        if (document.getElementById("to-celcius").checked) {
            function toFahrenheit(tempInput) {
                tempInput = parseFloat(tempInput);
                document.getElementById("temp-output").innerHTML = (tempInput - 32) / 1.8;
            }
        } else if (document.getElementById("to-fahrenheit").checked) {
            function toCelcius(tempInput) {
                tempInput = parseFloat(tempInput);
                document.getElementById("temp-output").innerHTML = (tempInput * 1.8) + 32;
            }
        }
    }

}  
  
  