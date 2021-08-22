 class  AuthenticationService {

  registerSuccessfullyLoggedInUser(username,password)
    {
        sessionStorage.setItem(username,password)
        sessionStorage.setItem('username',username)
    }
  logout(username)
  {
       sessionStorage.removeItem(username)
       sessionStorage.clear()
  }
  isUserLoggedIn(username)
  {
      if(sessionStorage.getItem(username)===null)
          return false
      return true
  }
     getLoggedInUsername()
     {
         if(sessionStorage.getItem('username')===null)
             return false
         return sessionStorage.getItem('username')
     }

}
export default  new AuthenticationService();