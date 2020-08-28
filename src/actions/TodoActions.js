//POST request to persist newly created todo to DB an associate with userId
export const createTodo = (todo, userId) => {
    console.log('b')
    return (dispatch) => {
        console.log('c')
        dispatch({type: "CREATING_TODO" });
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
            console.log('d')
            dispatch({type: "TODO_CREATED", todo});
        })
        console.log('e')
    }
    console.log('f')
};

// GET request to retrieve all todos associated with passed in userId
export const getTodos = userId => {
    return(dispatch) => {
        dispatch({type: "FETCHING_TODOS"});
        fetch(`http://localhost:3001/users/${userId}/todos`)
        .then(response => response.json())
        .then(todos => {
            dispatch({type: "TODOS_RECEIVED", todos})
        })
    }
};

// DELETE request to api to delete todo
export const todoCompleted = (userId, id) => {
    return(dispatch) => {
        dispatch({type: "DELETING_TODO"});
        fetch(`http://localhost:3001/users/${userId}/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
        })
        .then(() => {
            dispatch({type: "TODO_DELETED", id})
        })
        .catch(error => {
            console.log(error)
        }) 
    }
}