import store from "../store.js"
import quoteService from "../services/quote-service.js";

function _drawQuote() {
  let quote = store.State.quote
  document.getElementById("quote-box").innerHTML = quote.Template
}


export default class QuoteController {



  constructor() {
    store.subscribe("quote", _drawQuote)

    quoteService.getQuote()
  }
}
