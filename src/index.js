import react, {useState , useEffect} from "react";
import reactdomclient  from "react-dom/client";
import { BrowserRouter, useNavigate, Routes, Route, Link } from "react-router-dom";


import{
    Posts,
    Error,
    Footer,
    Login,
    Navbar,
    Profile,
    SinglePost,
    Register


}from "./components"

function App(){
    const [posts, setPosts] = useState([])
    const [loggedIn, setLoggedIn]=useState(false)
    const [token, setToken] = useState("")
    const [selectedPost, setSelectedPost] = useState({})

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

    }

    

    return (
        <>
        <Navbar loggedIn={loggedIn} Logout={Logout}/>
        <Routes>
            <Route path = "Posts" element={<Posts posts={posts} setPosts = {setPosts}/>}></Route>
            <Route path = "Login" element={<Login setToken = {setToken} setLoggedIn = {setLoggedIn}/>}></Route>
            <Route path = "Profile" element={<Profile/>}></Route>
            <Route path = "Register" element={<Register setToken = {setToken} setLoggedIn = {setLoggedIn}/>}></Route>
            <Route path = "*" element={<Error/>}></Route>
            <Route path = "/" element={<Posts posts={posts} setPosts = {setPosts}/>}></Route>
            <Route path = "SinglePost" element={<SinglePost/>}></Route>

        </Routes>
        

        <Footer/>
        </>
    )
}

const root = reactdomclient.createRoot(document.getElementById("app"));
root.render(<BrowserRouter><App/></BrowserRouter>)