import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  // const username = usernameInput.value;
  // const password = passwordInput.value;

  // if(!usernameInput)

  console.log(username, password);
  const Navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try{
      const response = await fetch('http://127.0.0.1:8000/auth_user/',{
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success){
        Navigate('/Courses');
 
      }
      else{
        console.log('cannot login');
        alert('the username or password is incorrect');
      }
    }
  catch (error) {
    console.error('error authenticating:', error);
  }
};

  return (
    <div>
      <div className="col m-auto">
        <div className="card card-body login-container  ">
          <h1 className="text-centre mb-3">
            Login
          </h1>
          {/* <!-- {% extends 'posts/index.html' %}
              {% block content %} --> */}
          <form onSubmit={handleLogin}>
            {/* {% csrf_token %} */}
            <div className="form-group ">
              <label htmlFor="username" className="label"></label>
              <input type="text" name="username" id="email" placeholder="Username" className="form-control username-form" onChange={(e) => setUsername(e.target.value)} />

              <label htmlFor="password" className="label"></label>
              <input type="password" name="password" id="password" placeholder="Enter password" className="form-control password-form" onChange={(e) => setPassword(e.target.value)} />

            </div>
            <button type="submit" className="login-btn btn btn-primary">Login</button>
          </form>
          {/* <!-- {{ form.errors }} --> */}
          <div className="forgotpassword">
            <Link to='/login/jfdslkfjd' className="forgot-password text-primary">Forgot password?</Link>
          </div>
          <div className="create-new ">
            <a href='register' ><button className="btn btn-primary"
              type="button">Create new account</button></a>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Login;