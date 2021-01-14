const axiosTodos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state] 
    case 'FETCH_TODOS':
      return action.payload 
    case 'CHANGE_TODO_STATE':
      return state.map(todo => {
          if (todo.id == action.payload)
            todo.completed = !todo.completed
          return todo
        })
    case 'CHANGE_TODO_TITLE':
      return state.map(todo => {
          if (todo.id == action.payload.id) {
            todo.title = action.payload.title
            console.log(todo.title, action.payload.title)
          }
          return todo
        })
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload) 
    default: 
      return state
  }
}

export default axiosTodos