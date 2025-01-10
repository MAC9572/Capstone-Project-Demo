
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import LiveEventCard from './LiveEventCard';
import { useNavigate } from 'react-router-dom';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';




        
const LiveEventCarousel = () =>{
 
  const navigate = useNavigate()


  
const Events  =[
{
  
  imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png'

},
{
  
  imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
  

},
{
  
  imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
  

},
{
  
  imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MzUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
  

},
{
  
  imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",


},
{
  
  imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png",
 

},
{
  
  imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png",


},
];


  return (
      
    <div>
         <h1 className='ms-4'>The Best of Live Events</h1>
    
    <div className='sliderout p-4'>
    
         
        <Swiper
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
            clickable: true,
        }}
        breakpoints={{
            '@0.00': {
                slidesPerView: 1,
                spaceBetween: 2,
            },
            '@0.75': {
                slidesPerView: 2,
                spaceBetween: 2,
            },
            '@1.00': {
                slidesPerView: 3,
                spaceBetween: 2,
            },
            '@1.50': {
                slidesPerView: 4,
                spaceBetween: 2,
            },
        }}
        modules={[Pagination]}
        className="mySwiper"
    >
        {
            Events.map((event) => {
                return (
                    <SwiperSlide key={event._id}>
                        <LiveEventCard event={event}/>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
    
</div>   
</div> 
)} 
    

export default LiveEventCarousel