class TimeService {
  getTime() {
    let currentTime = new Date();
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let timeOfDay = ""

    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes
    } else {
      currentMinutes = currentMinutes
    };
    if (currentHours < 12) {
      timeOfDay = "AM"
    } else {
      currentHours = currentHours - 12
      timeOfDay = "PM"
    };
    if (currentHours === 0) {
      currentHours = 12
    } else {
      currentHours = currentHours
    }

    let currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay

    document.getElementById("time").innerText = currentTimeString
    console.log(currentTimeString)






  }
  constructor() {
    this.getTime()

  }
}

const timeService = new TimeService();
export default timeService;