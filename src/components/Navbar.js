import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Navbar({loggedIn, Logout}){
    return (
        <>
        {
        !loggedIn?<Link to="Login"> Login </Link>: <button onClick={Logout}> Logout </button>
        }
        <Link to="Posts">View All posts</Link>
        {
        loggedIn?<Link to="Profile"> Profile</Link>:null
        }
        {
        !loggedIn?<Link to="Register"> Register</Link>:null
        }

        </>
    )
}