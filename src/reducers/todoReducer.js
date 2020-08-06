const todoReducer = (state= {todos: [], requesting: false}, action) => {
    console.log(action)
    switch(action.type) {
        case "CREATING_TODO":
            return {...state, todos: [...state.todos], requesting: true}
        case "TODO_CREATED":
            return {...state, todos: [...state.todos, action.todo], requesting: false}
        case "FETCHING_TODOS":
            return {...state, todos: [...state.todos], requesting: true}
        case "RETRIEVED_TODOS":
            return {...state.todos, todos: [...state.todos].concat(action.todos), requesting: false}
        default:
            return state
    }
}

export default todoReducer;