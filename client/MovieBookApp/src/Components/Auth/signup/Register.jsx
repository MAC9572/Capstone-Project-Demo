import React, { useState } from 'react'
import logo from '../signup/logo.png'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../Auth.css'
import { useNavigate } from 'react-router-dom'



const FormData =  {
  name:'',
  email : '',
  password: '',
  confirmPassword:'',
  city:''
}

const Register = () => {
    const navigate = useNavigate();
  const [formData,setFormData] = useState({  
    name:'',
    email : '',
    password: '',
    confirmPassword:'',
    city:'' });

  const [errors, setErrors] = useState({});


  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    setErrors({})

    const validationErrors = {};
    if(!formData.name){
        validationErrors.name = 'name is required';
      }
    if(!formData.email){
      validationErrors.email = 'Email is required';
    }
    if(!formData.city){
        validationErrors.city = 'City is required';
      }
    if(!formData.password){
      validationErrors.password = 'Password is required';
    }
  
    if(formData.password !== formData.confirmPassword){
        validationErrors.confirmPassword = 'Passwords do not match'
    }
    if(Object.keys(validationErrors).length>0){
      setErrors(validationErrors);
      return;
    }

 


    fetch(`http://localhost:8000/auth/register`, {
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
        .then((response) => {
            if (response.ok) {
                toast(response.message, {
                    type: 'success',
                    position: 'top-right',
                    autoClose: 2000
                })
                navigate( '/login')
                setFormData(
                    {
                        name: '',
                        email: '',
                        city: '',
                        password: '',
                        confirmPassword: ''
                      
                    }
                )
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
    <>
  
       <div className='authout pb-5' >
            <div className='authin'>
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
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="formerror">{errors.name}</span>}
                        </div>
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
                            <label>City</label>
                            <input
                                type="text"
                                placeholder="Enter Your city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && (
                                <span className="formerror">{errors.city}</span>
                            )}
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
                        <div className="forminput_cont">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Your Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            {errors.confirmPassword && (
                                <span className="formerror">{errors.confirmPassword}</span>
                            )}
                        </div>

                        <button type="submit" className="main_button">
                            Register
                        </button>
                      

                        <p className="authlink">
                            Already have an account? <Link to="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>

      
    </>
  )
}

export default Register