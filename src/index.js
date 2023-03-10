import React, { useState } from "react";
// import { Routes, Route, useNavigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { AllPosts } from "./components/posts.js";
import { Register } from "./components/Register.js"
import { Login } from "./components/Login.js"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      {!loggedIn ?
        <>
          <Login />
          <Register />
        </> : null}
      <AllPosts />
    </>

  )
}

//user space
//posts
//watch lectures on hash router - create routes

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <App />
);