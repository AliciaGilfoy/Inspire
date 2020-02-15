export default class Quote {
  constructor(data) {
    this.quote = data.quote
    this.author = data.quote
  }


  get Template() {
    return `
  <h3 id="quote">"${this.quote.body}"</h3>
  <h4 class="blockquote-footer text-white" id="author">${this.author.author}</h4>
  `
  }



}