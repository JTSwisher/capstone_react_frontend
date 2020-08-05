export const authenticate = (user) => {
    const newUser = user
    return (dispatch) => {
        dispatch({type: "AUTHENTICATING_USER" });
        fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({user: user})
        })
        .then(response => response.json())
        .then(user => {
            const token = user.token;
            localStorage.setItem('token', token);
            dispatch({type:"USER_AUTHENTICATED", user});
        })
        .catch((errors) => {
            dispatch({type:"AUTHENTICATION_ERROR", errors})
            localStorage.clear()
        })
    }
}

