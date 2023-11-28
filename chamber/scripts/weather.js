const lat = '-17.33456';
const lon = '-66.21644';
const key = '5ebdd17f9ffa81c25188227192fc81a1';
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
const toCelcius = 273.15;

const getWeatherData = async () => {
  const response = await fetch(weatherURL);
  const data = await response.json();

  console.log(data);
  displayWeather(data);
}

getWeatherData();

const displayWeather = (data) => {
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