import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Register({ setToken, setLoggedIn, setUserId }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function registerUser() {

    try {

      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      let result = await response.json()
      console.log(result)
      if (result.user) {
        setToken(result.token)
        setLoggedIn(true)
        setUserId(result.user.id)
        localStorage.setItem("token", result.token)
      }
      else {
        alert("Username Already Exists!")
      }


    } catch (err) {
      console.log("Could not register " + err)
    }
  }


  return (

    <>
    <br></br>
    <br></br>
      <fieldset>
        
        <legend>Sign Up!</legend>
        <div className="formLogIn"><center>
          <div>Register for Monkey Pox</div>
          <br></br>
          <form onSubmit={(event) => {
            event.preventDefault()
            if (password.length < 8) {
              alert("password must contain atleast 8 characters")
            } else {
              registerUser()
            }
          }}>
            {/* <label>Desired Username</label> */}
            <input type="text" placeholder="Desired Username" required value={username} onChange={(event) => { setUsername(event.target.value) }}></input>
            <br></br>
            {/* <label>Desired Password</label> */}
            <input type="password" placeholder="Desired Password" required value={password} onChange={(event) => { setPassword(event.target.value) }}></input>
            <br></br>
            <button type="submit">REGISTER</button>
          </form>
          <br></br>
          <div>Already have Monkey Pox Credentials?</div>
          <br></br>
          <Link to="/Login">Log In Here</Link>
        </center></div>
      </fieldset>
    </>

  )
}