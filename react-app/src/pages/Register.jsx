import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(username, password);
  const Navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try{
      const response = await fetch('http://127.0.0.1:8000/create-user/',{
        method: 'POST',
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
        Navigate('/');
        console.log('new user created');
      }
      else{
        console.log('check for errors');
        alert(data.message);
        alert('SOmthing is not right');
      }
    }

  catch(error){
    console.error('error authenticating:', error)
  }
};

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <h1 style={{ marginLeft: "30%" }}>Sign up page</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group ">
          <label htmlFor="username" className="label">Username</label>
          <input type="text" name="username" id="username" placeholder="Username" className="form-control username-form" onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="password" className="label">password</label>
          <input type="password" name="password" id="password" placeholder="Enter password" className="form-control password-form" onChange={(e) => setPassword(e.target.value)} />

          <label htmlFor="cpassword" className="label">Confirm Password</label>
          <input type="password" name="cpassword" id="cpassword" placeholder="Confirm password" className="form-control password-form" />

        </div>
        <button type="submit" id="butn" className="login-btn btn btn-primary" style={{ marginBottom: '10px' }}>
        Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register;