export const createTodo = (todo, userId) => {
    console.log(todo, userId)
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
            dispatch({type: "TODO_ADDED", todo});
            console.log(todo)
        })
    }

}