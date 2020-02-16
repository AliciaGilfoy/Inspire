import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _Count() {
  let completed = 0
  let todos = store.State.todos;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed) {
      completed++
    }
  } document.getElementById("completed").innerText = completed.toString()
}

//TODO Create the render function
function _drawTodos() {
  document.getElementById("total").innerText = store.State.todos.length.toString()
  let todos = store.State.todos;
  console.log(todos)
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
    store.subscribe("todos", _Count)
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todo = {
      description: form.todoName.value
    }
    TodoService.addTodo(todo);
    form.reset()
    // @ts-ignore
    $('#todoModal').modal('toggle');
  }

  toggleTodoStatus(todoId, check) {
    TodoService.toggleTodoStatus(todoId, check);
  }

  removeTodo(todoId) {
    TodoService.removeTodo(todoId);
  }
}
