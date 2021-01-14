export const addTodo = payload => {
  return { 
    type: 'ADD_TODO',
    payload: payload
  }
}
export const changeTodoState = payload => {
  return { 
    type: 'CHANGE_TODO_STATE',
    payload: payload
  }
}
export const changeTodoTitle = payload => {
  return { 
    type: 'CHANGE_TODO_TITLE',
    payload: payload
  }
}
export const fetchTodos = payload => {
  return { 
    type: 'FETCH_TODOS',
    payload: payload
  }
}
export const removeTodos = payload => {
  return { 
    type: 'REMOVE_TODO',
    payload: payload
  }
}


export const fetchUsers = payload => {
  return { 
    type: 'FETCH_USERS',
    payload: payload
  }
}
export const addUser = payload => {
  return { 
    type: 'ADD_USER',
    payload: payload
  }
}