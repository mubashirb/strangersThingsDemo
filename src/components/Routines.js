import { useEffect, useState } from "react";

export default function Posts({ posts, setPosts, token, loggedIn }) {
    const [message, setMessage] = useState("")
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        async function getPosts() {
            try {
                const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })

                let data = await response.json()
               
                setPosts(data.data.posts)

            } catch (err) {
                console.log(err)

            }

        }
        getPosts()
    }, [token, posts])
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
    async function handleDelete(postIdToDelete){
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2202-vpi-rm-web-pt/posts/${postIdToDelete}`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
          alert("Post Deleted")
          
    }
    function postMatches(post, searchTerm){
        let title = post.title.toLowerCase()
        let description = post.description.toLowerCase()
        let username = post.author.username.toLowerCase()
        let price = post.price.toLowerCase()
        let location = post.location.toLowerCase()
        let string = searchTerm.toLowerCase()

        if (title.includes(string) || description.includes(string) || username.includes(string) || price.includes(string) || location.includes(string) ){
            return true
        }
    }
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    return (
        <>
        <div id="searchBar">
        <input  placeholder="Search Posts"type="text" value={searchTerm} onChange={(event)=> {setSearchTerm(event.target.value)}}></input></div>
        {postsToDisplay.map((post) => {
            return<div key={post._id}>
                <fieldset>
                    <legend >{post.title}</legend>
                    <div>{post.description}</div>
                    <div>{post.price}</div>
                    <div>{post.willDeliver}</div>
                    <div>{post.location}</div>
                    <div>{post.author.username}</div>

                    {post.isAuthor ? <button onClick={()=>handleDelete(post._id)}>Delete</button> : null}
                </fieldset>
                {!post.isAuthor && loggedIn ?
                    <form onSubmit={(event)=>{
                        event.preventDefault()}
                    }>
                        <input placeholder="type your message here" onChange={(event)=> {setMessage(event.target.value)}}></input>
                        <button type="submit" onClick={()=>sendMsg(post._id)}>SEND</button>
                    </form> : null}
            </div>
           
        })}
        </>
    )
  

}