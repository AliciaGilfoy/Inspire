export default class Todo {
  constructor(data) {
    this._id = data._id || ""
    this.completed = data.completed || false
    this.user = data.user || ""
    this.description = data.description || ""
  }


  get Template() {
    return `
    <div class="form-check">
    <input class="form-check-input" type="checkbox" value="true" id="${this._id}">
    <label class="form-check-label" for="${this._id}">
      ${this.description}  <i onclick="app.todoController.removeTodo('${this._id})" class="fas fa-times text-danger pl-2"></i>
    </label>
  </div>
  `
  }



}