import ImageService from "../services/image-service.js";
import store from "../store.js"



function _drawImage() {
  let image = store.State.image
  document.querySelector("body").style.backgroundImage = `url(${image})`
}

export default class ImageController {

  constructor() {
    store.subscribe("image", _drawImage)

    ImageService.getImage()

  }
}
