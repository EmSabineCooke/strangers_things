//render posts from API
//create new post when logged in(using login stuff from userSpace)
//delete users own posts

import React, { useEffect, useState } from "react";

const COHORT_NAME = '2211-FTB-ET-WEB-AM'

export const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const AllPosts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`)
        const result = await response.json();
        setPosts(result.data.posts)
      } catch (error) {
        console.log(error)
      }
    }
    getPosts()
  }, [])

  console.log(posts, "posts")

  return (
    <>
      <header>
        <h2>Strangers Things</h2>
        <button id="messages">messages</button>
        <button id="logout">logout</button>
        <button id="myPosts">my posts</button>
      </header>

      {posts.map(
        (post) => {
          return (
            <>

              <div>
                <h1>{post.title}</h1>
                <h2>{post.price}</h2>
                <h2>{post.description}</h2>
                <button id="message">message</button>
                <button id="view">view</button>
              </div>
            </>

          )
        }
      )}
    </>
  )

}

// export default AllPosts;
