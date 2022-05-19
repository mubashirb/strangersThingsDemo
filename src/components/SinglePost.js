import react, {useState , useEffect} from "react";
import reactdomclient  from "react-dom/client";
import { BrowserRouter, useNavigate, Routes, Route, Link } from "react-router-dom";

export default function SinglePost(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false)

    async function createPost(){
        
    }
    return (
            <>
            <form>
                <label>POST</label>
                <br></br>
                <label>title</label>
                <input type="text" placeholder="name of the sale item"></input>
                <label>description</label>
                <input type="text" placeholder="decription of the item"></input>
                <label>Price</label>
                <input type="text"></input>
                <label>Location</label>
                <input type="text"></input>
                <label type="boolean">willDeliver</label>
                <button type="submit">submit</button>
            </form>
            </>
            )
}   //search results from art collector: reference  

//need to create a useState for each attribute(title, description, Price, Location and willDeliver. 
// pass in a variable also )