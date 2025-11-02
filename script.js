  // Function to convert temperature
    function convert() {
      let temp = document.getElementById("temp").value; // get input value
      let from = document.getElementById("from").value; // get "from" unit
      let to = document.getElementById("to").value;     // get "to" unit
      let result = document.getElementById("result");

      if (temp === "") {
        result.innerHTML = "Please enter a value!";
        return;
      }

      temp = parseFloat(temp); // convert string input to number
      let converted;

      // If same units selected, no change
      if (from === to) {
        converted = temp;
      }
      // Celsius conversions
      else if (from === "C" && to === "F") {
        converted = (temp * 9/5) + 32;
      } else if (from === "C" && to === "K") {
        converted = temp + 273.15;
      }
      // Fahrenheit conversions
      else if (from === "F" && to === "C") {
        converted = (temp - 32) * 5/9;
      } else if (from === "F" && to === "K") {
        converted = ((temp - 32) * 5/9) + 273.15;
      }
      // Kelvin conversions
      else if (from === "K" && to === "C") {
        converted = temp - 273.15;
      } else if (from === "K" && to === "F") {
        converted = ((temp - 273.15) * 9/5) + 32;
      }

      result.innerHTML = "Converted Value: " + converted.toFixed(2) + " °" + to;
    }