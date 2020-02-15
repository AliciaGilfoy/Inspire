import TodoService from "../services/todo-service.js";
import store from "../store.js";
import Todo from "../models/Todo.js"

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos;
  let todoElem = document.getElementById("todos");
  let template = ""

  todos.forEach(todo => {
    template += todo.Template
  });
  todoElem.innerHTML = template
}
export default class TodoController {
  constructor() {
    console.log("todo controlelr works")
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todo = {
      description: form.todoName.value
    }
    TodoService.addTodo(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatus(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodo(todoId);
  }
}
