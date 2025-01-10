import React from 'react'
import HomeSlider from '../Components/HomeSlider/HomeSlider'
import MoviesCarousel from '../Components/MoviesCarousel/MoviesCarousel'
import LiveEventCarousel from '../Components/LiveEvent/LiveEventCarousel'
import Add from '../Components/ADD/Add'
import PremiereCarousel from '../Components/Premeum/PremiereCarousel'
import MusicStudioCarousel from '../Components/MusicStudio/MusicStudioCarousel'
import OutDoorCarousel from '../Components/outdoor/OutDoorCarousel'

const Home = () => {
  return (
    <>
     
      <HomeSlider/>
      <MoviesCarousel/>
      <Add/>
      <LiveEventCarousel/>
      <PremiereCarousel/>
      <MusicStudioCarousel/>
      <OutDoorCarousel/>
    </>   
  )
}

export default Home