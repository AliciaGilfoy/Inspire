import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

function getIcon() {
}


class WeatherService {
  async getWeather() {
    let res = await weatherApi.get();
    store.commit("weather", new Weather(res.data));
    console.log(store.State.weather)
    console.log("type from store", store.State.weather.type[0].main)
  }
}

const weatherService = new WeatherService();
export default weatherService;
