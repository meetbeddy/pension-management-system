{
    //@route GET 
    //@desc get single user
    //access private (include token to access)

   "getuser"= "https://stark-depths-01637.herokuapp.com/user/getuser/id"
    
    //@route POST 
    //@desc sign in for user
    //access public

    "usersignin"= "https://stark-depths-01637.herokuapp.com/user/API/signin"

    //@route POST 
    //@desc sign up for user
    //access public

    "usersignup"= "https://stark-depths-01637.herokuapp.com/user/API/signup"

    //@route POST 
    //@desc confirm user
    //access private (admin route)

    "confirm user"= "https://stark-depths-01637.herokuapp.com/admin/API/confirm/id"

    //@route POST 
    //@desc admin creation
    //access private
    //@params sign up details - name,phone,email, password
    "admincreate"= "https://stark-depths-01637.herokuapp.com/admin/API/createadmin"

    //@route POST 
    //@desc admin login
    //access private
    //@params sign in details

    "usersignin"= "https://stark-depths-01637.herokuapp.com/admin/API/signin"

    //@route GET 
    //@desc get confirmed members
    //access public
    //params null

    "usersignin"= "https://stark-depths-01637.herokuapp.com/admin/API/getmembers"
}