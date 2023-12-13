//select HTML elements in the doc

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


//20.51141830586405, -86.9446740325802 lat and long of Mexico copied from Google maps
//put URL here 
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.94&units=imperial&appid=78187222caea4489b966ba455a6c5b4e';


async function apiFetch () {
    try {
        const response = await fetch(url); 
        if (response.ok) {
            const data = await response.json();
            console.log(data); //testing only
            displayResults(data); //uncomment when ready 

        } else {
            throw Error (await response.text());
        }
        } catch (error) {
            console.log(error);
        }

}


function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;

    //const iconsrc = 'https://openweather.org/img/w/'
    let iconCode = data.weather[0].icon;
    let iconUrl = `https://openweather.org/img/w/${iconCode}.png`;


    //Setting attributes for the weather icon image
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    //Accessing the weather description
    captionDesc.textContent = `${data.weather[0].description}`; 

}


apiFetch();