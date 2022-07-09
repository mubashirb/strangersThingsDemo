import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

export default function Login({ setToken, setLoggedIn, setUserId }) {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  return (

    <>
      <br></br>
      <br></br>
      <fieldset>
        <legend>Welcome Back!</legend>
      <div className="formLogIn"><center>
        <div>Please enter credentials for Monkey Pox</div>
        <br></br>
        <form onSubmit={async (event) => {
          event.preventDefault()
          let result = await loginUser(username,password);
          if (!result.error) {
            setToken(result.token)
            setLoggedIn(true)
            localStorage.setItem("token", result.token)
            localStorage.setItem("userId", result.user.id)
            setUserId(result.user.id)
            navigate("/Home")
          } else {
            alert("Login Failed...Remember your credentials!")
          }
        }}>
          {/* <label>Username:</label> */}
          <input type="text" placeholder= "username" required value={username} onChange={(event) => { setUsername(event.target.value) }}></input>
          <br></br>
          {/* <label>Password:</label> */}
          <input type="password" placeholder= "password" required value={password} onChange={(event) => { setPassword(event.target.value) }}></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <br></br>
        <Link to="/Register">Create Account</Link>
        </center></div>
      </fieldset>
    </>

  )
}

