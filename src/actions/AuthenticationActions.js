export const authenticate = (user) => {
    return {
        type: "AUTHENTICATE_USER",
        user
    }
}

