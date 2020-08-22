const userReducer = (state= {currentUser: {}, requesting: false}, action) => {
    console.log(action)
    switch(action.type) {
        case "AUTHENTICATING_USER":
            return {...state, requesting: true}
        case "USER_AUTHENTICATED": // if successful signup/login return curren_user data 
            return {...state, currentUser: action.user, requesting: false}
        default:
            return state
    }
}

export default userReducer;