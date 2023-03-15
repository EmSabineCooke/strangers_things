//render posts from API
//create new post when logged in(using login stuff from user.js
//delete users own posts

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const BASE_URL = `https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-AM`

export const AllPosts = () => {
  const location = useLocation()

  const [posts, setPosts] = useState([])

  const navigate = useNavigate();

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
  const View = () => {
    navigate('/post')
  }




  return (
    <>

      {posts.map(
        (post) => {
          return (
            <>

              <div>
                <h1>{post.title}</h1>
                <h2>{post.price}</h2>
                <h2>{post.description}</h2>
                <button id="view" onClick={View}>view</button>
              </div>
            </>

          )
        }
      )}
    </>
  )
}
