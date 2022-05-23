import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Navbar({loggedIn, Logout}){

    
    return (
    <>
    <div className = "nav">
        {
        !loggedIn?<Link className="link" to="Login"> LOGIN </Link>: <button onClick={Logout}> Logout </button>
        }
        <Link  className="link" to="Posts">POSTS</Link>
        {
        loggedIn?<Link className="link" to="Profile">PROFILE</Link>:null
        }
        {
        !loggedIn?<Link className="link" to="Register"> REGISTER</Link>:null
        }
        {
        loggedIn?<Link className="link" to="SinglePost"> POST AN ITEM</Link>:null
        }
</div>
        </>
    )
}