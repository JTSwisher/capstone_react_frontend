const userReducer = (state= {current_user: {}, requesting: false}, action) => {
    console.log(action)
    switch(action.type) {
        case "AUTHENTICATING_USER":
            return {...state, requesting: true}
        case "USER_AUTHENTICATED":
            return {...state, current_user: action.user, requesting: false}
        default:
            return state
    }


}

export default userReducer;