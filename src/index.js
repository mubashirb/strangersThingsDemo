import react, {useState , useEffect} from "react";
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

const app = require("./app")

function App(){
   
    const [loggedIn, setLoggedIn]=useState(false)
    const [token, setToken] = useState("")
    
    const navigate = useNavigate()
    

    useEffect(()=>{
        let savedToken = localStorage.getItem("token")
        if(savedToken){
            setLoggedIn(true)
            setToken(savedToken)
        }
    },[])

    function Logout(){
        localStorage.removeItem("token")
        setLoggedIn(false)
        setToken("")
        navigate("/login")

    }

    

    return (
        <>
        <Navbar loggedIn={loggedIn} Logout={Logout}/>
        <Routes>
            <Route path = "Posts" element={<Posts loggedIn = {loggedIn} token={token} posts={posts} setPosts = {setPosts}/>}></Route>
            <Route path = "Login" element={<Login setToken = {setToken} setLoggedIn = {setLoggedIn}/>}></Route>
            <Route path = "Profile" element={<Profile setSelectedPost = {setSelectedPost} selectedPost = {selectedPost} token = {token} />}></Route>
            <Route path = "Register" element={<Register setToken = {setToken} setLoggedIn = {setLoggedIn}/>}></Route>
            <Route path = "*" element={<Error/>}></Route>
            <Route path = "/" element={<Posts posts={posts} setPosts = {setPosts}/>}></Route>
            <Route path = "SinglePost" element={<SinglePost token = {token} setPosts = {setPosts}/>}></Route>

        </Routes>
        

        <Footer/>
        </>
    )
}

const root = reactdomclient.createRoot(document.getElementById("app"));
root.render(<BrowserRouter><App/></BrowserRouter>)