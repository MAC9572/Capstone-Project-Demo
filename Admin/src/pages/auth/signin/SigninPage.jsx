
import React, { useState } from 'react';
import '../auth.css';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

const SigninPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {


    try {
         
         const response = await fetch(`http://localhost:8000/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password }),
        credentials: 'include'
      });
    

      if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., store adminAuthToken in a secure way
        console.log('Admin login successful', data);

        toast.success('Admin Login Successful', {
       
        });
        navigate('/pages/movie/createmovie');
        window.location.reload();

      } else {
        // Handle login error
        console.error('Admin login failed', response.statusText);
        toast.error('Admin Login Failed', {
         
        });
      }
    }
    catch (error) {
      toast.error('An error occurred during registration');
      console.error('An error occurred during registration', error);
    }

  }

  
  return (
    <div className='formpage'>
    

      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
 
      <button onClick={handleLogin}>Sign in</button>
  
      <ToastContainer/>

    
      </div>
     
      
  )
}

export default SigninPage