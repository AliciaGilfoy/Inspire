import WeatherService from "../services/weather-service.js";
import store from "../store.js";


function drawWeather() {
  let weather = store.State.weather
  document.getElementById("weather").innerHTML = weather.Template
}

export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
