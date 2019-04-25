export function getTodosFromLS() {
  if (localStorage.getItem("todos")) {
    const 
        todosItem = localStorage.getItem("todos"),
        parseTodosItem = JSON.parse(todosItem);
    return parseTodosItem;
  } else {
      return []
  }
}

export function setTodoToLS(todos) {
    if(localStorage.getItem("todos")) {
        const stringifyTodos = JSON.stringify(todos);
        localStorage.setItem('todos', stringifyTodos)
    } else {
        const stringifyTodos = JSON.stringify(todos);
        localStorage.setItem('todos', stringifyTodos)
    }
}
