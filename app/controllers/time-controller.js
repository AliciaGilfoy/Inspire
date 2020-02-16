
import timeService from "../services/time-service.js"


export default class TimeController {



  constructor() {
    timeService.getTime()
    setInterval(timeService.getTime, 30000)
  }
}