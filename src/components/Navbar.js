import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Navbar({loggedIn, Logout}){

    //MY ROUTINES, NOT LOGGED IN ROUTINES,  ACTIVITIES, HOME,
    return (
    <>
    <div className = "nav">
       
        {
        !loggedIn || loggedIn?<Link className="link" to="Home"> Home</Link>:null
        }
        
        {
        loggedIn?<Link className="link" to="MyRoutines"> My Routines</Link>:null
        }
        {
        !loggedIn || loggedIn?<Link className="link" to="Routines"> Routines</Link>:null
        }
        {
        !loggedIn || loggedIn?<Link className="link" to="Activities"> Activities</Link>:null
        }
        {
        !loggedIn?<Link className="link" to="Register"> Sign Up</Link>:null
        }
        {
        !loggedIn?<Link className="link" to="Login"> Login </Link>: <span className="link" onClick={Logout}> Logout </span>
        }
</div>
        </>
    )
}