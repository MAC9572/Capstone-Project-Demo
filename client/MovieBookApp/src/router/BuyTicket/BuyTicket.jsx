import React from 'react'
import DatePicker from 'react-horizontal-datepicker'
import './BuyTicket.css'
import {useParams } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';



const BuyTicket = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const params = useParams()


  const [selectedDate, setSelectedDate] = useState(new Date())
  const { movieid, city } = params
  const [movie, setMovie] = useState(null)
  const [theatres, setTheatres] = useState(null)
  
  console.log(movieid)
  console.log(city)
  console.log(selectedDate)
  console.log(movie)
  console.log(theatres)




  const getMovie = async () => {
    fetch(`http://localhost:8000/movie/movies/${movieid}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.ok) {
                console.log(data)
                setMovie(data.data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
      }     
  
  // const movie ={
  //   moviename:'Kanguva',
  //   date:new Date(),
  //   language:'Tamil',
  //   type:'Action/Thriller',
  //   screens:[
  //     {
  //       name:"Screen 1",
  //       location:"PVR Cinemas,Forum Mall,Koramangala"
  //     },
  //     {
  //       name:"Screen 2",
  //       location:"PVR Cinemas,Forum Mall,Koramangala"
  //     },
  //     {
  //       name:"Screen 3",
  //       location:"PVR Cinemas,Forum Mall,Koramangala"
  //     },

  //   ]
   

   const getTheatres = async (date) => {
    let movieId = movieid
   
    

    fetch(`http://localhost:8000/movie/screensbymovieschedule/${city}/${date}/${movieId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.ok) {
                console.log(data)
                setTheatres(data.data)
            }
            else {
                console.log(data)
            }
        })
        .catch(err=>{
          console.log(err)
        })


 }

 useEffect(() => {
  getMovie()
}, [])

useEffect(() => {
  getTheatres(selectedDate)
}, [selectedDate])



  return (
    <>
  {
    movie &&
    <div className='buytickets'>
    <div className='s1'>
      <div className='head'>
        <h1>{movie.title} 
          {/* - {movie.language} */}
          </h1>
        <h3>{movie.genre.join(", ")}</h3>
      </div>
      <DatePicker 
                  getSelectedDay={
                    (date)=>{
                      console.log(date)
                      setSelectedDate(date)
                    }
                  }
                  endDate={100}
                  selectDate={selectedDate}
                  labelFormat={"MMMM"}
                  color={"rgb(248, 68, 100)"}          
/>
    </div>
      {
        theatres && theatres.length > 0 &&
        <div className='screens'>
        {
          theatres.map((screen,index)=>{
            let screenid = screen._id
            return (
              <div className='screen' key={index}>
                <h2>{screen.name}</h2>
                <h3>{screen.location}</h3>
                <Link to = {`${pathname}/${screenid}?date=${selectedDate}` } className=" bookbtn" >
                 select
                </Link>
              </div>
            )
           
        })
      }
      
      </div>
    
      }
    </div>
  }
    </>
    
  )
}

export default BuyTicket