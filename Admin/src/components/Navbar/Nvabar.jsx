
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../Navbar/logo.png'
import { useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
    const checkAdminAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:8000/admin/checklogin', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'

            });
            if (response.ok) {
                // Admin is authenticated
                setIsAdminAuthenticated(true);
            } else {
                // Admin is not authenticated
                setIsAdminAuthenticated(false);
               
            }  

        }
        catch (error) {
            console.error('An error occurred during admin authentication check', error);
            setIsAdminAuthenticated(false);

        }
    }

    useEffect(() => {
        checkAdminAuthentication();
    }, []);
    return (
        <div className='navbar'>


              <div onClick = {()=>{navigate('/')}}>
            <img src={logo} alt="Logo" width={100} className='logo' />
            </div>

            <div className='adminlinks pe-5'>
                {isAdminAuthenticated ? (
                    <>
                        {/* Show links for authenticated admin */}
                        <Link to ='/pages/movie/createmovie'>Add Movie</Link>
                        <Link to ='/pages/screen'>Add Screen</Link>
                        <Link to ='/pages/schedule'>Add Schedule</Link>
                      
                       

                    </>
                ) : (
                    <>
                        {/* Show login/signup links for unauthenticated admin */}
                        <Link to  ='/pages/auth/signin'>Login</Link>
                        <Link to ='/pages/auth/signup'>Signup</Link>
                    </>
                )}
            </div>

           
        </div >
    )
}

export default Navbar