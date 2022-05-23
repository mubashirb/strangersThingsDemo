import react, { useState, useEffect } from "react";




export default function Profile({ token }) {
    const [userPosts, setUserPosts] = useState([])
    const [userMessages, setUserMessages] = useState([])
    const [message, setMessage] = useState("")
    const [userID, setUserID] = useState("")
    useEffect(() => {
        async function userData() {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2202-vpi-rm-web-pt/users/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })
                let data = await response.json()
                setUserPosts(data.data.posts)
                setUserMessages(data.data.messages)
                setUserID(data.data._id)
            } catch (err) {
                console.error(err)

            }
        }
        userData()
    }, [token])
    async function sendMsg(postid){
        try{
            let response = await fetch(`https://strangers-things.herokuapp.com/api/2202-vpi-rm-web-pt/posts/${postid}/messages`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                  message: {
                    content: message
                  }
                })
              })
              let data = await results.json()
              
        }catch(err){

        }
        
    }
    return (
        
        <>
        <fieldset>
            <legend>USER Posts</legend>
        {userPosts.map((post) => {
            return (<div key={post._id}>
                <fieldset>
                <div > Title:{post.title}</div>
                <div> Description: {post.description}</div>
                <div>{post.willDeliver? <div>Delivery: YES</div>: <div>Delivery: NO</div>}</div>
                <div>Price: {post.price}</div>
                <div>Created on:{post.createdAt}</div>
                <div> Location: {post.location}</div>
                <legend>{!post.active? <div id="deleted">Deleted</div>: <div id="active">Active</div>}</legend>
                
                <div></div>
                </fieldset>

                
            </div>)
        })}</fieldset>
        <fieldset>
            <legend>MESAGGES</legend>
        {userMessages.map((msg) => {
            return (<div key={msg._id}>
                <fieldset>
                <div>{msg.post.title}</div>
                <div>User: {msg.fromUser.username}</div>
                <div>Msg: {msg.content}</div>
               { userID !== msg.fromUser._id ? 
               <legend id="receivedMsg">Received Message</legend> : <legend id="sentMsg">Sent Message</legend>}
                
                </fieldset> 

            </div>)
        })}</fieldset>
        </>
)
}