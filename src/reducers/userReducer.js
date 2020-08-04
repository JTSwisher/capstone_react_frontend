const userReducer = (state= {}, action) => {
    console.log(action)
    switch(action.type) {
        case "AUTHENTICATE_USER":
            return {...state, current_user: action.user}
        default:
            return state
    }


}

export default userReducer;