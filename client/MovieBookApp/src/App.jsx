import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './router/Home'
import Page from './router/movies/page'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import BuyTicket from './router/BuyTicket/BuyTicket'
import Screen from './router/Screen/Screen'
import Login from './Components/Auth/signin/Login'
import Register from './Components/Auth/signup/Register'
import Profile from './router/profile/Profile'





const App = () => {
  return (
    <>
     <Navbar/>
     
      <Routes> 
            
        <Route path="/" element ={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/login/Register' element={<Register/>}/>
        <Route path="/movies/:city/:movieid" element={<Page/>} />
        <Route path='/movies/:city/:movieid/buytickets' element={<BuyTicket/>}/>
        <Route path='/movies/:city/:movieid/buytickets/:screenid' element={<Screen/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
    
    <Footer/>

    </>
    
  )
}

export default App