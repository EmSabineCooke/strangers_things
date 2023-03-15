import React, { useState } from "react";
// import { Routes, Route, useNavigate } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { AllPosts } from "./components/posts.js";
import { Register } from "./components/Register.js"
import { Login } from "./components/Login.js"
import { Header } from "./components/Header.js"
import { MyPosts } from "./components/Posts/MyPosts.js"
import { NewPost } from "./components/Posts/NewPost.js"
import { Messages } from "./components/Message.js"
import { SinglePost } from "./components/Posts/SinglePost.js"
// import UserData from "./components/User.js"

const App = () => {
  return (
    <>
      {/* {!isLoggedIn ?
      <>
        <Login name={"amber"} age={34} />
        <Register />
        <AllPosts />
      </> : null} */}

      <Routes>
        <Route path="/" element={<><Header /><AllPosts /></>} />
        <Route path="/login" element={<><Login /><Register /></>} />
        <Route path="/myposts" element={<MyPosts />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/post" element={<SinglePost />} />
        <Route path="/mymessages" element={<Messages />} />
      </Routes>
    </>

  )

}


//user space
//posts
//watch lectures on hash router - create routes

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <HashRouter>
      <App />
    </HashRouter>

  </>

);