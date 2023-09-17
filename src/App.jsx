import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss';
import Navbar from './components/navbar/Navbar';
import { Typewriter } from 'react-simple-typewriter';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Chat from './pages/chats/Chat';
import Posts from './pages/Posts/Posts';
import NewPost from './pages/Posts/NewPost/NewPost';
import CurrentPost from './pages/Posts/CurrentPost/CurrentPost';
import Browse from './pages/Browse/Browse';
import Settings from './pages/Settings/Settings';
import Login from './pages/loginorsignup/login/Login';
import SignUp from './pages/loginorsignup/signup/signup';
function App() {
  

  return (
    <>
          <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/chats' element={<Chat></Chat>}></Route>
        <Route path='/posts'>
          <Route index element={<Posts></Posts>}></Route>
          <Route path='/posts/:id' element={<CurrentPost/>}></Route>
          <Route path='/posts/new' element={<NewPost/>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/browse' element={<Browse/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
      </Routes>
        
    </>
  )
}

export default App
