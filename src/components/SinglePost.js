import react, {useState , useEffect} from "react";
import reactdomclient  from "react-dom/client";
import { BrowserRouter, useNavigate, Routes, Route, Link } from "react-router-dom";

export default function SinglePost({token, setPosts}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false)

    async function createPost(){
        try{
            const response = await fetch('https://strangers-things.herokuapp.com/api/2202-vpi-rm-web-pt/posts', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post: {
                title: title,
                description: description,
                price: Price,
                willDeliver: willDeliver
              }
            })
          })
          let data = await response.json()
                setPosts(data.data.post)

            }catch(err){
                console.log(err)
            }
        }
        return (
            <>
            <form onSubmit={(event)=>{
            event.preventDefault()
            createPost()
        }}>
                <label>POST</label>
                <br></br>
                <label>title</label>
                <input type="text" value={title} onChange={(event)=>{setTitle(event.target.value)}} placeholder="name of the sale item"></input>
                <label>description</label>
                <input type="text" value={description} onChange={(event)=>{setDescription(event.target.value)}} placeholder="decription of the item"></input>
                <label>Price</label>
                <input type="text" value={Price} onChange={(event)=>{setPrice(event.target.value)}}></input>
                <label>Location</label>
                <input type="text" value={Location} onChange={(event)=>{setLocation(event.target.value)}}></input>
                <label type="checkbox" value={willDeliver} >willDeliver</label>
                <input type="checkbox" onChange={(event)=>{setWillDeliver(true)}}></input>
                <button type="submit">submit</button>
            </form>
            </>
            )
}   //search results from art collector: reference  

//need to create a useState for each attribute(title, description, Price, Location and willDeliver. 
// pass in a variable also )