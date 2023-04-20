import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import { Contact } from "./views/contact/Contact";
import About from "./views/About/About";
import Login from "./views/login/Login";
import { Register } from "./views/register/Register";
import { Posts } from "./views/posts/Posts";
import {Add} from "./views/Add/Add";
import PostDetails from "./views/postDetails/PostDetails";
import MyPosts from "./views/MyPosts/MyPosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Posts />} path="/posts" />
        <Route element={<MyPosts />} path="/myposts" />
        <Route element={<Add />} path="/add" />
        <Route element={<PostDetails />} path="/postDetails/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
