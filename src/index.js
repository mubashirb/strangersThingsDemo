import React, {useState , useEffect} from "react";
import reactdomclient  from "react-dom/client";
import { BrowserRouter, useNavigate, Routes, Route, Link } from "react-router-dom";


import{
    Home,
    Error,
    Footer,
    Login,
    Navbar,
    Activities,
    MyRoutines,
    Register,
    Routines
}from "./components"

function App(){
   
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState(0);
    const [routines, setRoutines] = useState([]);
    
    const navigate = useNavigate();
    

    useEffect(()=>{
        let savedToken = localStorage.getItem("token");
        if(savedToken){
            setLoggedIn(true);
            setToken(savedToken);
        }
    },[])

    function Logout(){
        localStorage.removeItem("token");
        setLoggedIn(false);
        setToken("");
        alert("You've successfully logged out and you're being redirected to the homepage!")
        navigate("/");

    }

    

    return (
        <>
        <Navbar loggedIn={loggedIn} Logout={Logout}/>
        <Routes>
            
            <Route path = "/" element={<Home />}></Route>
            <Route path = "Routines" element={<Routines loggedIn={loggedIn} token={token} userId={userId} routines={routines} setRoutines={setRoutines}/>}></Route>
            <Route path = "Login" element={<Login setToken={setToken} setLoggedIn={setLoggedIn} setUserId={setUserId}/>}></Route>
            <Route path = "Home" element={<Home token={token} />}></Route>
            <Route path = "Register" element={<Register setToken={setToken} setLoggedIn={setLoggedIn} setUserId={setUserId}/>}></Route>
            <Route path = "MyRoutines" element={<MyRoutines loggedIn={loggedIn} token={token} userId={userId} />}></Route>
            <Route path = "Activities" element={<Activities loggedIn = {loggedIn} token={token}/>}></Route>
            <Route path = "*" element={<Error/>}></Route>

        </Routes>
        
        <br></br>
        <br></br>
        <Footer/>
        </>
    )
}

const root = reactdomclient.createRoot(document.getElementById("app"));
root.render(<BrowserRouter><App/></BrowserRouter>)