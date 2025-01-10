import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nvabar from './components/Navbar/Nvabar'
import SignupPage from './pages/auth/signup/SignupPage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SigninPage from './pages/auth/signin/SigninPage'
import CreateMoviePage from './pages/movie/createmovie/CreateMovie'
import Screen from './pages/screen/Screen'
import Schedule from './pages/schedule/Schedule'

import Footer from './pages/Footer/Footer'

const App = () => {
  return (
    <div>
   <Nvabar/>
 
   

<Routes>
  <Route path='/pages/auth/signin' element={<SigninPage/>}/>
  <Route path='/pages/auth/signup' element={<SignupPage/>}/>
  <Route path='/pages/movie/createmovie' element={<CreateMoviePage/>}/>
  <Route path='/pages/screen' element={<Screen/>}/>
  <Route path='/pages/schedule' element={<Schedule/>}/>

</Routes>
<Footer/>
<ToastContainer/>

    </div>
  )
}

export default App