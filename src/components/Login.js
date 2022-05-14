import react, {useState , useEffect} from "react";
import {  useNavigate} from "react-router-dom";

export default function Login({setToken, setLoggedIn}){
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
   
    async function LoginUser(){
        try{
            const response = await fetch('https://strangers-things.herokuapp.com/api/2202-vpi-rm-web-pt/users/login', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: username,
                    password: password
                  }
                })
              })
              let result = await response.json()
              setToken(result.data.token)
              setLoggedIn(true) 
              localStorage.setItem("token", result.data.token)
              navigate("/Posts")
              

        }catch(err){
            console.log("couldnt log in "+ err)
        }
    }   
    return( 
        
        <>
        
        <form onSubmit={(event)=>{
            event.preventDefault()
            LoginUser()
        }}>
            <label>Enter Username:</label>
            <input type="text" value={username} onChange={(event)=>{setUsername(event.target.value)}}></input>
            <label>Enter Password:</label>
            <input type="text" value={password} onChange={(event)=>{setPassword(event.target.value)}}></input>
            <button type="submit">Submit</button>
        </form>

        </>
   
    )
    }