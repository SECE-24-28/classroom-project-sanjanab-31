import React from 'react'

const Home =({posts})=>{
    return(
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.datetime}</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
export default Home