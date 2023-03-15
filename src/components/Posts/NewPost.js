import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../posts";


export const NewPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  console.log(localStorage.getItem('token'))


  const back = () => {
    navigate("/myposts")
  }

  const makePost = async (event) => {
    event.preventDefault()
    const TOKEN = localStorage.getItem('token')
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }



  const handleChange = (event) => {
    if (event.target.placeholder === "title") {
      setTitle(event.target.value)
    }
    if (event.target.placeholder === "description") {
      setDescription(event.target.value)
    }
    if (event.target.placeholder === "location") {
      setLocation(event.target.value)
    }
    if (event.target.placeholder === "price") {
      setPrice(event.target.value)
    }
  }



  return (
    <>

      <form id="new">
        <h3>New Listing</h3>
        <label>
          <input type='text' value={title} placeholder='title' onChange={handleChange}></input>
        </label>
        <label>
          <input type='text' value={description} placeholder='description' onChange={handleChange}></input>
        </label>
        <label>
          <input type='text' value={location} placeholder='location' onChange={handleChange}></input>
        </label>
        <label>
          <input type='text' value={price} placeholder='price' onChange={handleChange}></input>
        </label>
        <button id="submit" onClick={makePost}>Submit</button>
      </form>
      <button id='back' onClick={back}>back</button>
    </>

  )
}

