export default class Todo {
  constructor(data) {
    this._id = data._id || ""
    this.completed = data.completed || false
    this.user = data.user || ""
    this.description = data.description || ""
  }

  get button() {
    if (!this.completed) {
      return `
      <i class="far fa-square text-dark" onclick="app.todoController.toggleTodoStatus('${this._id}', true)"></i>
    `
    }
    else {
      return `
      <i class="fas fa-check-square text-success" onclick="app.todoController.toggleTodoStatus('${this._id}', false)"></i>
      `
    }
  }

  get Template() {
    return `
    <div class="todo-item">
    ${this.button}
		<h5 class="px-2">${this.description}</h5>
    <i onclick="app.todoController.removeTodo('${this._id}')" class="fas fa-times text-danger"></i>
    </div>
  `
  }


}

