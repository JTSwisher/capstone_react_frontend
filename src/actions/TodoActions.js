export const createTodo = (todo, userId) => {
    return (dispatch) => {
        dispatch({type: "ADDING_TODO" });
        fetch(`http://localhost:3001/users/${userId}/todos`, {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({todo: todo, user_id: userId})
        })
        .then(response => response.json())
        .then(todo => {
            dispatch({type: "TODO_CREATED", todo});
        })
    }

}

export const getTodos = userId => {
    return(dispatch) => {
        dispatch({type: "FETCHING_TODOS"});
        fetch(`http://localhost:3001/users/${userId}/todos`)
        .then(response => response.json())
        .then(todos => {
            dispatch({type: "RETRIEVED_TODOS", todos})
        })
    }
}