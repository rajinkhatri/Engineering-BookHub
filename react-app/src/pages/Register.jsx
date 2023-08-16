import React from 'react'

function Register() {
  return (


<div class="container" style={{marginTop: '100px'}}>
  <h1 style={{marginLeft: "30%"}}>Sign up page</h1> 
        <form action="/php-crud/signup.php" method="POST">
            <div class="form-group ">
              <label for="username" class="label">Username</label>
              <input type="text" name="username" id="username" placeholder="Username" class="form-control username-form" />

              <label for="password" class="label">password</label>
              <input type="password" name="password" id="password" placeholder="Enter password" class="form-control password-form" />

              <label for="cpassword" class="label">Confirm Password</label>
              <input type="password" name="cpassword" id="cpassword" placeholder="Confirm password" class="form-control password-form" />

            </div>
            <button type="submit" id="butn" class="login-btn btn btn-primary" style={{marginBottom: '10px'}}>
            <a class='link1' href='/php-crud/_nav.php' style={{color: 'white'}}>Sign up</a>
            </button>
          </form>
    </div>

  )
}
 
 export default Register;