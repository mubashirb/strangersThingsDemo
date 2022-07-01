import react, { useState, useEffect } from "react";




export default function ({ token }) {

    const [userID, setUserID] = useState("")
    useEffect(() => {
        async function userData() {
            try {
                const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })
                let data = await response.json()
                setUserID(data.user.id)
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
            <legend> USER Routines</legend>
        {userPosts.map((post) => {
            return (<div key={routine._id}>
                <fieldset>
                <div > Title:{routine.title}</div>
                <div> Description: {routine.content}</div>
                <div>{post.willDeliver? <div>Delivery: YES</div>: <div>Delivery: NO</div>}</div>
                <div>Created on:{post.createdAt}</div>
                <legend>{!routine.active? <div id="deleted">Deleted</div>: <div id="active">Active</div>}</legend>
                
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