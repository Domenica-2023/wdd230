//select HTML elements in the doc

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



//38.643676039825806, -122.85671184573454 Healdsburg, CA


//put URL here 
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.64&lon=-122.85&units=imperial&appid=yourIDwillGoHereWhenYouRecieveTheEmail';


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