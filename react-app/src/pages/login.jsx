import { Link } from "react-router-dom";

function Login (){
    return (
      
  <div>
  
      
      
        <div className="col m-auto"> 
          <div className="card card-body login-container  ">
             <h1 className="text-centre mb-3">
              Login
            </h1> 
            {/* <!-- {% extends 'posts/index.html' %}
  
              {% block content %} --> */}
  
  
            <form action = 'login' method="POST">
              {/* {% csrf_token %} */}
              <div className="form-group ">
                <label htmlFor="username" className="label"></label>
                <input type="text" name="username" id="email" placeholder="Username" className="form-control username-form" />
  
                <label htmlFor="password" className="label"></label>
                <input type="password" name="password" id="password" placeholder="Enter password" className="form-control password-form" />
  
              </div>
              <button type="submit" className="login-btn btn btn-primary">Login</button>
            </form>
  
            {/* <!-- {{ form.errors }} --> */}
  
             
  
            <div className="forgotpassword">
              <Link to= '/login/jfdslkfjd' className="forgot-password text-primary">Forgot
                password?</Link>
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