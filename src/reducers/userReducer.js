const userReducer = (state= {}, action) => {
    console.log(action)
    switch(action.type) {
        case "AUTHENTICATE_USER":
            return state
        default:
            return state
    }


}

export default userReducer;