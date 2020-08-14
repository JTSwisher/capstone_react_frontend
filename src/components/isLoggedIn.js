export const isLoggedIn = () => {
   return ( localStorage.token ? true : false )
}