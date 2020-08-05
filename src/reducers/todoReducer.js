const todoReducer = (state= {todos: [], requesting: false}, action) => {
    console.log(action)
    switch(action.type) {
        case "ADDING_TODO":
            return {...state, requesting: true}
        case "TODO_ADDED":
            return {...state, todos: [...state.todos, action.todo], requesting: false}
        default:
            return state
    }


}

export default todoReducer;