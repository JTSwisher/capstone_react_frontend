import history from '../History';

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
            console.log(user)
            if (user.error) {
                window.alert(user.error)
            } else {
                const token = user.token;
                localStorage.setItem('token', token);
                dispatch({type:"USER_AUTHENTICATED", user});
                history.push("/home")
            }
        })
        .catch((error) => {
            dispatch({type:"AUTHENTICATION_ERROR", error})
            localStorage.clear()
        })
    }
}

