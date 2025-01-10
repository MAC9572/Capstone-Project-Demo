import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useNavigate} from 'react-router-dom'
import logo from '../Navbar/logo.png'
import Location from '../types/popups/Location'
import Theme from '../Theme/Theme'



const Navbar = () => {
  const [showLocationPopup, setshowLocationPopup] = useState(false)
  
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  const getuser = async () => {

      fetch(`http://localhost:8000/auth/getuser`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include'
      })
          .then((res) => {
              return res.json();
          })
          .then((response) => {
             if(response.ok){
              setUser(response.data)
              setLoggedIn(true)
             }
             else{
              setLoggedIn(false)
             }
          })
          .catch((error) => {
              console.log(error)
          })

  }

  

  const handleLogout = async () => {
      fetch(`http://localhost:8000/auth/logout`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include'
      })
          .then((res) => {
              return res.json();
          })
          .then((response) => {
              console.log(response)
              if (response.ok) {
                  navigate ('/') 
                  window.location.reload()
              }

          })
          .catch((error) => {
              console.log(error)
             navigate('/login')

          })
  }

  const checkLogin = async () => {
      // let authToken = await getCookie('authToken')
      // let refreshToken = await getCookie('refreshToken')

      // console.log(authToken, refreshToken)
      fetch(`http://localhost:8000/auth/checklogin`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include'
      })
          .then((res) => {
              return res.json();
          })
          .then((response) => {
              console.log(response)
              if(response.ok){
                  setLoggedIn(true)
              }
              else{
                  setLoggedIn(false)
              }
          })
          .catch((error) => {
              console.log(error)
              setLoggedIn(false)
          })
  }

  useEffect(() => {
    checkLogin()
    getuser()
}, [])

  

  let renderlocation = ()=>{
    return       showLocationPopup && 
      <Location setshowLocationPopup = {setshowLocationPopup} />
  }

  const navigate = useNavigate();
  
  return (
    
    // <nav className='navbar container-fluid'>

     
    //     <div className='left '>

    //       {/* logo */}
    //      <div onClick = {()=>{navigate('/')}} >
    //      <img className='logo ' src={logo} alt="logo" />
    //      </div>
         
        
    //      {/* searchbar */}

    //     <div className='searchbox input-container'>
    //     <input className='ms-3 input-field ps-3' type="text" placeholder='Search For a Movie' />
    //     <i className="bi bi-search input-icon "></i>
    //     </div>
        
    //     </div>

    //     <div className='dl'>
    //         <Theme/>
    //     </div>

          

    //     <div className='right'>

    //       {/* Dropdown */}
        
    //     <p className="loc m-3" 
    //     onClick={()=> setshowLocationPopup(true)}>
    //       {user ? user.city : "select city"}<i className="bi bi-chevron-compact-down ms-1 mt-1"></i>
    //       </p>
        
    //       {/* Logoutbtn */}

    //       {
    //         loggedIn ?
    //         <button className='btn' onClick={handleLogout}>Logout</button>
    //         :
    //         <Link to = '/login' className='btn'>Login</Link>
    //       }
          
    //       {/* Profile icon */}
    //       <Link to = '/profile'>
    //       <div className='theme'>
    //      <i className="bi bi-person-circle ps-4 fs-1"></i></div>
    //      </Link>

    //     </div>
       
       
    
    //   {renderlocation()}
      
       

    // </nav>

<nav className="navbar navbar-expand-lg ">
  <div class="container-fluid">
    
  <div className='left '>

{/* logo */}
<div onClick = {()=>{navigate('/')}} >
<img className='logo navbar-brand ' src={logo} alt="logo" />
</div>

{/* searchbar */}

<div className='searchbox input-container'>
<input className='ms-3 input-field ps-3' type="text" placeholder='Search For a Movie' />
<i className="bi bi-search input-icon "></i>
</div>

</div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse container" id="navbarSupportedContent">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0 container">

        <li className="nav-item ">
              <div className='dl'>
            <Theme/>
               </div>
        </li>

     
        <li className="nav-item ">
          
          {/* Dropdown */}
        
        <p className="loc m-3 " 
        onClick={()=> setshowLocationPopup(true)}>
          {user ? user.city : "select city"}<i className="bi bi-chevron-compact-down ms-1 mt-1"></i>
          </p>

        </li>

        <li className="nav-item ">
           {/* Logoutbtn */}

           {
            loggedIn ?
            <button className='btn container' onClick={handleLogout}>Logout</button>
            :
            <Link to = '/login' className='btn '>Login</Link>
          }
        </li>

        <li className="nav-item ">
          {/* Profile icon */}
          <Link to = '/profile'>
          <div className='nav-item theme'>
         <i className="bi bi-person-circle ps-4 fs-1 "></i></div>
         </Link>
         </li>
       

      </ul>
  
    </div>

  </div>
  {renderlocation()}
</nav>
  )
}

export default Navbar
