const axiosTodos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state] 
    case 'FETCH_TODOS':
      return action.payload 
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload) 
    default: 
      return state
  }
}

export default axiosTodos