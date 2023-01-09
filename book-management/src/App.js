import React from 'react'
import Navbar from './frontEnd/navBar'
import Home from './frontEnd/home'
import Login from './frontEnd/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GetBook from './frontEnd/getBooks'
import Register from './frontEnd/register'

const App = () => {
  const token = JSON.parse(localStorage.getItem('data'))
  console.log(token)
  return (
    <>
      <BrowserRouter><Navbar token={token} /><Routes><Route path="/" element={<Home token={token} />}></Route><Route path="/Register" element={<Register />}></Route>{token ? <Route path="/" element={<Home />}></Route> : <Route path="/Login" element={<Login />}></Route>}<Route path="/" element={<Home />}></Route><Route path="/GetBook" element={<GetBook />}></Route></Routes></BrowserRouter>
    </>
  )
}

export default App