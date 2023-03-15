import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../posts";


export const MyPosts = () => {

  const navigate = useNavigate();
  const TOKEN = localStorage.getItem('token')

  const [post, setPosts] = useState([])
  const [POST_ID, setPOST_ID] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
          },
        });
        const result = await response.json();
        console.log(result);
        setPosts(result.data.posts)
        setPOST_ID(result.data._id)
        return result;
      } catch (err) {
        console.error(err);
      }
    }
    getData()
  }, [])
  console.log(post)
  console.log(POST_ID)

  const deletePost = async () => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${POST_ID}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
  const newPostButton = () => {
    navigate("/newpost")
  }

  return (
    <>
      <>
        MY POSTS
      </>
      <button id="newPost" onClick={newPostButton}>Add a new listing</button>
      {post.map((post) => {
        return (
          <>
            <div>
              <h3>{post.title}</h3>
              <p>{post.price}</p>
              <p>{post.location}</p>
              <p>{post.description}</p>
              <button id='deletePost' onClick={deletePost}>delete listing</button>
            </div>
          </>)
      })}
    </>
  )

}
