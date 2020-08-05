export const createTodo = (todo, userId) => {
    return (dispatch) => {
        dispatch({type: "ADDING_TODO" });
        fetch(`http://localhost:3001/users/${userId}/todos`)
    }

}