
export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    this.type = data.weather || []
    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.floor(1.8 * (this.kelvin - 273) + 32)


  }

  get IconTemplate() {
    let string = this.type[0].main
    if (string = "Clouds") {
      return `<i class="fas fa-cloud"></i>`
    } if (string = "Rain") {
      return `<i class="fas fa-cloud-rain"></i>`
    } if (string = "Snow") {
      return `<i class="fas fa-snowflake"></i>`
    } if (string = "Sunny") {
      return `<i class="fas fa-sun"></i>`
    } if (string = "Extreme") {
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