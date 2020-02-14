import store from "../store.js";


// @ts-ignore
let _imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});


class ImageService {
  getImage() {
    _imgApi.get("")
      .then(res => {
        let newImage = res.data.large_url
        store.commit("image", newImage)
      }).catch(error => {
        console.error(error);
      });
  }

}

const imageService = new ImageService();
export default imageService;
