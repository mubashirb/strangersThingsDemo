import { useEffect, useState } from "react";

export default function Posts({ posts, setPosts, token }) {
    const [message, setMessage] = useState("")
    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch('https://strangers-things.herokuapp.com/api/2202-vpi-rm-web-pt/posts', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })

                let data = await response.json()
                console.log(data.data.posts)
                setPosts(data.data.posts)

            } catch (err) {
                console.log(err)

            }

        }
        getPosts()
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
        this.innerHTML("")
    }
    return (
        posts.map((post) => {
            return <div key={post._id}>
                <fieldset>
                    <legend >{post.title}</legend>
                    <div>{post.description}</div>
                    <div>{post.price}</div>
                    <div>{post.willDeliver}</div>
                    <div>{post.location}</div>
                    <div>{post.author.username}</div>

                    {post.isAuthor ? <button >Delete</button> : null}
                </fieldset>
                {!post.isAuthor ?
                    <form onSubmit={(event)=>{
                        event.preventDefault()}
                    }>
                        <input placeholder="type your message here" onChange={(event)=> {setMessage(event.target.value)}}></input>
                        <button type="submit" onClick={()=>sendMsg(post._id)}>SEND</button>
                    </form> : null}
            </div>
        })
    )


}