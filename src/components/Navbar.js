import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Navbar({loggedIn, Logout}){

    
    return (
    <>
    <div className = "nav">
        {
        !loggedIn?<Link className="link" to="Login"> LOGIN </Link>: <button onClick={Logout}> Logout </button>
        }
        {
        loggedIn?<Link className="link" to="Home">HOME</Link>:null
        }
        {
        !loggedIn?<Link className="link" to="Register"> REGISTER</Link>:null
        }
</div>
        </>
    )
}