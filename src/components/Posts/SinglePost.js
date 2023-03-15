import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../posts";


export const SinglePost = () => {

  console.log("hewwoo")

  const navigate = useNavigate();

  // const [post, setPost] = useState([])


  // useEffect(() => {
  //   const getPost = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/posts`)
  //       const result = await response.json();
  //       setPost(result.data.posts)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getPost()
  // }, [])

  // console.log(post)

  // const postMessage = async () => {
  //   try {
  //     const response = await fetch(`${BASE_URL}/posts/${POST_ID}/messages`, {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${TOKEN}`
  //       },
  //       body: JSON.stringify({
  //         message: {
  //           content: content
  //         }
  //       })
  //     });
  //     const result = await response.json();
  //     console.log(result);
  //     return result
  //   } catch (err) {
  //     console.error(err);
  //   }


  const goBack = () => {
    navigate('/')
  }
  // const Message = () => {
  //   navigate('/message')
  // }

  return (
    <>
      <button onClick={goBack}>go back</button>
      <div>
        <h2>hewwoo</h2>

      </div>
      <form id='message'>
        <input></input>
        <button id="message" onClick={postMessage}>Send a Message</button>
      </form>
    </>
  )
}