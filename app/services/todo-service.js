import store from "../store.js";
import Todo from "../models/Todo.js";

// @ts-ignore
const _todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/Alicia/todos/",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    _todoApi.get();
    //TODO Handle this response from the server
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

  toggleTodoStatus(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    _todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }

  constructor() {
    console.log("todo service works")
  }
}

const todoService = new TodoService();
export default todoService;
