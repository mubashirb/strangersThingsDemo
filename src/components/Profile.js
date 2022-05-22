import react, { useState, useEffect } from "react";




export default function Profile({ token }) {
    const [userPosts, setUserPosts] = useState([])
    const [userMessages, setUserMessages] = useState([])
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
            } catch (err) {
                console.error(err)

            }
        }
        userData()
    }, [token])
    return (
        <>
        <fieldset>
            <legend>USER Posts</legend>
        {userPosts.map((post) => {
            return (<div key={post._id}>

                <div > {post.title}</div>
                <div>{post.description}</div>
                <div>{post.willDeliver}</div>
                <div>{post.price}</div>
                <div>{post.createdAt}</div>
                <div>{post.location}</div>

                <button>Delete</button>
            </div>)
        })}</fieldset>
        <fieldset>
            <legend>MESAGGES</legend>
        {userMessages.map((msg) => {
            return (<div key={msg._id}>
                
                <div>{msg.post.title}</div>
                <div>User: {msg.fromUser.username}</div>
                <div>Msg: {msg.content}</div>

            </div>)
        })}</fieldset>
        </>
)
}