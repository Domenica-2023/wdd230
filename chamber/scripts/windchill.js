// Get temperature and wind speed values from HTML
var temperature = parseFloat(document.getElementById("temperature").textContent);
var windSpeed = parseFloat(document.getElementById("windspeed").textContent);

// Check if the temperature is below or equal to 50°F and wind speed is above 3 mph
if (temperature <= 50 && windSpeed >= 3) {

    // Calculate wind chill using the specified formula
    var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

    // Round the result to two decimal places
    windChill = Math.round(windChill * 100) / 100;

    // Calculate how much colder it feels due to wind chill
    var colderBy = temperature - windChill;

    // display windchill and sentence explaining
    document.getElementById("windChillOutput").textContent = "Feels " + windChill + "°F."; }

else {
    // If temperature is above 50°F or wind speed is below 3 mph, wind chill is not applicable
    document.getElementById("windChillOutput").textContent = "N/A"; }