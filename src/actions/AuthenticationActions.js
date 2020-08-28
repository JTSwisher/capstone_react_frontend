import history from '../History';
// POST request to authenticate user login/signup. If succesful redirect "/home" 
export const authenticate = (user) => {
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
            if (user.error) {
                window.alert(user.error)
            } else {
                const userId = user.id;
                const token = user.token;
                localStorage.setItem('user', userId);
                localStorage.setItem('token', token);
                dispatch({type:"USER_AUTHENTICATED", user});
                history.push("/home")
            }
        })
        .catch((error) => {
            console.log(error)
            localStorage.clear()
        })
    }
}

