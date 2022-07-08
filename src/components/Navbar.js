import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "../images/24h.png";
export default function Navbar({loggedIn, Logout}){

    //MY ROUTINES, NOT LOGGED IN ROUTINES,  ACTIVITIES, HOME,
    return (
    <>
    
   
    
    <div className = "nav">
    <img className="navbar-img" src={logo} width= "88px"/>
        {
        !loggedIn || loggedIn?<Link className="link2" to="Home"> Home</Link>:null
        }
        
        {
        loggedIn?<Link className="link2" to="MyRoutines"> My Routines</Link>:null
        }
        {
        !loggedIn || loggedIn?<Link className="link2" to="Routines"> Routines</Link>:null
        }
        {
        !loggedIn || loggedIn?<Link className="link2" to="Activities"> Activities</Link>:null
        }
        {
        !loggedIn?<Link className="link2" to="Register"> Sign Up</Link>:null
        }
        {
        !loggedIn?<Link className="link2" to="Login"> Login </Link>: <span className="link" onClick={Logout}> Logout </span>
        }
</div>
        </>
    )
}