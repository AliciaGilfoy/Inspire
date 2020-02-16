import store from "../store.js";
import Todo from "../models/Todo.js";



// @ts-ignore
const _todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Alicia/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    _todoApi.get()
      .then(res => {
        let apiTodos = res.data.data.map(t => new Todo(t))
        store.commit("todos", apiTodos)
      }).catch(error => {
        console.error(error);
      });
  }

  addTodo(todo) {
    _todoApi.post("", todo)
      .then(res => {
        let newTodo = new Todo(res.data.data)
        console.log(newTodo)
        let todos = [...store.State.todos, newTodo]
        store.commit("todos", todos)
      }).catch(error => {
        console.error(error);
      });
  }

  toggleTodoStatus(todoId, check) {
    let newTodo = store.State.todos.find(todo => todo._id == todoId)
    newTodo.completed = check
    _todoApi.put(todoId, newTodo)
      .then(res => {
        let todo = store.State.todos.find(todo => todo._id == todoId)
        for (let prop in newTodo)
          todo[prop] = newTodo[prop]
        store.commit("todos", store.State.todos)
      }).catch(error => {
        console.error(error);
      });
  }

  removeTodo(todoId) {
    _todoApi.delete(todoId)
      .then(res => {
        let filteredTodos = store.State.todos.filter(t => t._id != todoId)
        store.commit("todos", filteredTodos)
      }).catch(error => {
        console.error(error);
      });
  }

  constructor() {
  }
}

const todoService = new TodoService();
export default todoService;
