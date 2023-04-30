import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import HomePage from '../components/HomePage'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CardDetails from '../components/CardDetails'
import AddToCard from '../components/AddToCard'
import OrderHistory from '../components/OrderHistory'

const RoutesPages = () => {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/cardDetails' element={<CardDetails/>}/>
    <Route path='/addToCard' element={<AddToCard/>}/>
    <Route path='/orderHistory' element={<OrderHistory/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default RoutesPages