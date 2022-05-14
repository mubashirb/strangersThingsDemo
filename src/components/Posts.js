import { useEffect, useState } from "react" ;

export default function Posts({posts, setPosts}){
    useEffect(() => {
        async function getPosts(){
            try{
                const response = await fetch('https://strangers-things.herokuapp.com/api/2202-vpi-rm-web-pt/posts')
                let data = await response.json()
                setPosts(data.data.posts)

            }catch(err){
                console.log(err)

            }

        }
        getPosts()
    },[])
    return(
        posts.map((post)=>{
            return <div key={post._id}>
            <div >{post.title}</div>
            <div>{post.description}</div>
            </div>
        })
    )
}