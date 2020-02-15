import Quote from "../models/Quote.js";
import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  getQuote() {
    _quoteApi.get("")
      .then(res => {
        store.commit("quote", new Quote(res.data));
      })
  }

  constructor() {
    console.log("quote service works")
  }
}

const quoteService = new QuoteService();
export default quoteService;
