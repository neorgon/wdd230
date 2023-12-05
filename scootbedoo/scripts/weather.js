const lat = '20.50722';
const lon = '-86.93672';
const key = '5ebdd17f9ffa81c25188227192fc81a1';
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
const toCelcius = 273.15;

const getWeatherData = async () => {
  try {
    const response = await fetch(weatherURL);
    if (!response.ok) {
      throw new Error(`ERROR: ${response.status} ${response.statusText}`)
    }
    const data = await response.json();
    console.log(data);
    displayWeatherData(data);
  }
  catch (error) {
    console.error(error);
  }
}

getWeatherData()

const displayWeatherData = (data) => {
  let temp = document.getElementById('temp');
  let wIcon = document.getElementById('w-icon');
  let feelsLike = document.getElementById('feels-like');
  let wMain = document.getElementById('w-main');
  let wDescription = document.getElementById('w-description');

  temp.textContent = (parseFloat(data.main.temp) - toCelcius).toFixed(2) + " º";
  wIcon.setAttribute('src', ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  feelsLike.textContent = (parseFloat(data.main.feels_like - toCelcius)).toFixed(2) + " º";
  wMain.textContent = data.weather[0].main;
  wDescription.textContent = data.weather[0].description;
}