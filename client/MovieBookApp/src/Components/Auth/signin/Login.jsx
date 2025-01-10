import React, { useState } from 'react'
import logo from '../signin/logo.png'
import {Link} from 'react-router-dom'
import '../Auth.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const FormData =  {
  email : '',
  password: ''
}

const Login = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
});
const [errors, setErrors] = useState({});
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};


const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.email) {
        validationErrors.email = 'Email is required';
    }
    if (!formData.password) {
        validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }
    
    fetch(`http://localhost:8000/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials:'include'
    })
    .then((res) => {
        return res.json();
    })
    .then(async (response) => {
        console.log('login res ', response)
        if (response.ok) {
            toast(response.message, {
                type: 'success',
                position: 'top-right',
                autoClose: 2000
            })
            navigate("/")
            window.location.reload()
         
        } else {
            toast(response.message, {
                type: 'error',
                position: 'top-right',
                autoClose: 2000
            });
        }
    })
    .catch((error) => {
        toast(error.message, {
            type: 'error',
            position: 'top-right',
            autoClose: 2000
        });
    })


  }

  return (
    
  
  <div className='authout pb-5 container-fluid' >
            <div className='authin '>
                <div className="left">
                    <img src={logo} alt="" className='img' />
                </div>
                <div className='right'>
                    <form
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        onSubmit={handleSubmit}
                    >
                        <div className="forminput_cont">
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="formerror">{errors.email}</span>}
                        </div>
                        <div className="forminput_cont">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <span className="formerror">{errors.password}</span>
                            )}
                        </div>

                        <button type="submit" className="main_button">
                            Login
                        </button>

                        <p className="authlink">
                            Don't have an account? <Link to="/login/Register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        
    </div>
  )
}

export default Login