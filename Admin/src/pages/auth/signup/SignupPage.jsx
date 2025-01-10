
import React, { useState } from 'react';
import '../auth.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8000/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include'
      });
      console.log(response);



      if (response.ok) {
        const data = await response.json();
        // Handle successful signup, e.g., show a success message
        console.log('Admin registration successful', data);

        toast.success('Admin Registration Successful', {
        
        });

      } else {
        // Handle signup error
        console.error('Admin registration failed', response.statusText);
        toast.error('Admin Registration Failed', {
          
        });
      }
    }
    catch (error) {
      toast.error('An error occurred during registration');
      console.error('An error occurred during registration', error);
    }
  }


  return (
    <>
   
      
        <div className='formpage'>
        <ToastContainer/>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleSignup}>Sign up</button>
     
      
    </div>
 
    </>
  )
}

export default SignupPage