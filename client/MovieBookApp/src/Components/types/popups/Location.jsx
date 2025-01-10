import React, { useEffect, useState } from 'react'
import '../popups/Location.css'
import { toast } from 'react-toastify'






const Location = ({setshowLocationPopup}) => {


  const [cities, setCities] = useState([])
  const getcities = async ()=>{
    const indianCities = [
      "Jabalpur",
      "Mumbai",
      "Delhi",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Pune",
      "Ahmedabad",
      "Jaipur",
      "Surat",
      "Lucknow",
      "Kanpur",
      "Nagpur",
      "Indore",
      "Thane",
      "Bhopal",
      "Visakhapatnam",
      "Pimpri-Chinchwad",
      "Patna",
      "Vadodara"
    ];

    const cities = indianCities.map((city)=>{
      return{
        label: city,
        value: city
      }
    })
    setCities(cities)
  }

  useEffect(()=>{
    getcities()
  },[]);

  
  const [selectedCity, setSelectedCity]=useState(null)

  const handleSave =()=> {
  
   
      
    
    
    fetch(`http://localhost:8000/auth/changeCity`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      credentials: 'include',
      body:JSON.stringify({
        city:selectedCity
      })
  })
  .then((res)=>res.json())
  .then((data)=>{
    if(data.ok){
   
      setshowLocationPopup(false)
      window.location.reload() 
    }
    else{
      toast(data.message,{
        type:'error'
      })
    }
  })
  .catch((err) => {
    toast(err.message,{
      type:'error'
    })
    console.log(err)
    
})


}

  return (

    <div className='popup-bg'>

      <div className='popup-cont'>
         <select
         className='select'
         value={selectedCity}
         onChange={(e)=>setSelectedCity(e.target.value)}>
          <option value='' disabled selected>Select your city</option>
          {
            cities.map((city)=>{
              return <option key={city.value} value={city.value}>{city.label}</option>
            })
          }
         </select>

      <button className='btn' onClick={handleSave}>Save</button>
      </div>
  

    </div>
  )
}


export default Location