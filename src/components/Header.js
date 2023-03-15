import React from "react"
import { useNavigate } from "react-router-dom";

export const Header = () => {
  console.log('Header')
  const navigate = useNavigate();


  const loginClick = () => {
    console.log('login button')
    navigate("/login");
  }
  const messageButton = () => {
    navigate("/mymessages")
  }
  const myPostsButton = () => {
    navigate("/myposts")
  }
  const logOutButton = () => {
    localStorage.clear();
    window.location.reload();
  }



  return (
    <>
      <header>
        <h2>Strangers Things</h2>



        {localStorage.length > 0 ?
          <><button id="messages" onClick={messageButton}>messages </button>
            <button id="myPosts" onClick={myPostsButton}>my posts</button>
            <button id="logout" onClick={logOutButton}>log out</button></>
          : <button id="login" onClick={loginClick}>login</button>}
      </header>
    </>
  )

}
