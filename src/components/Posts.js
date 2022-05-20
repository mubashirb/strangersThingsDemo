import { useEffect, useState } from "react" ;

export default function Posts({posts, setPosts, token}){
    useEffect(() => {
        async function getPosts(){
            try{
                const response = await fetch('https://strangers-things.herokuapp.com/api/2202-vpi-rm-web-pt/posts',{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                      },
                    })

                let data = await response.json()
                console.log(data.data.posts)
                setPosts(data.data.posts)

            }catch(err){
                console.log(err)

            }

        }
        getPosts()
    },[token])
    return(
        posts.map((post)=>{
            return <div key={post._id}>
            <div >{post.title}</div>
            <div>{post.description}</div>
            
            {post.isAuthor? <button>Delete</button>:null}
            </div>
        })
    )


}