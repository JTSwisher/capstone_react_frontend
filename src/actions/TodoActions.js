export const createTodo = (todo, userId) => {
    return (dispatch) => {
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
            dispatch({type: "TODO_CREATED", todo});
        })
    }
};

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
            dispatch({type: "TODO_COMPLETED", id})
        })
        .then(function(){
            alert("Todo Completed!")
        })
        .catch(e => {
            console.log(e)
        }) 
    }
}