
export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.type = data.weather || []
    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.floor(1.8 * (this.kelvin - 273) + 32)


  }

  get IconTemplate() {
    if (this.type[0].main == "Clouds") {
      return `<i class="fas fa-cloud"></i>`
    } else if (this.type[0].main == "Rain") {
      return `<i class="fas fa-cloud-rain"></i>`
    } else if (this.type[0].main == "Snow") {
      return `<i class="fas fa-snowflake"></i>`
    } else if (this.type[0].main == "Sunny") {
      return `<i class="fas fa-sun"></i>`
    } else if (this.type[0].main == "Extreme") {
      return `<i class="fas fa-bolt"></i>`
    } else {
      return '<i class="fas fa-cloud-sun-rain"></i>'
    }
  }

  get Template() {
    return `
        <div class="col">
					<h2>${this.IconTemplate} ${this.fahrenheit} &deg;F</h2>
				</div>
				<div class="col text-center">
					<h3>${this.city}</h3>
				</div>
    
    `
  }

}