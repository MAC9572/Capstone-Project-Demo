import React from 'react'
import './MusicStudio.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import MusicStudioCard from './MusicStudioCard';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';





const MusicStudioCarousel = () => {

    const MusicStudio  =[
        {
          
          imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyMiBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00416499-gdvruweqyf-portrait.jpg',
           name:"Armaan Malik - Live in Chennai",
           location:"YCMA, Royapettah: chennai concerts ",
           Date:'Sun, 22 Dec'
        },
        {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyMSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00413868-kxbmudunlu-portrait.jpg',
             name:"SID SRIRAM - CLASSICAL CONCERT",
             location:"Bharat Kalachar: chennai concerts",
             Date:'Sat, 21 Dec'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxNSBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00420058-stymbmthgr-portrait.jpg',
             name:"PETTA RAP - The Originals",
             location:"Island Group : chennai concerts",
             Date:'Sun, 08 Dec'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417510-hazycxuwyz-portrait.jpg',
             name:"KARTHIK LIVE IN TRICHY",
             location:"Morais Majestic: Trichy",
             Date:'Sat, 14 Dec'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-svchyajukh-portrait.jpg',
             name:"HAAZRI A.R.Rahman Live in concert",
             location:"Jio World Garden, BKC:Mumbai",
             Date:'Fri, 17 Jan'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxIERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411191-qmspznqcyv-portrait.jpg',
             name:"SPB Charan's ONE MAN SHOW",
             location:"Vani Mahal: chennai",
             Date:'Sun, 22 Dec'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421272-avynyzumwn-portrait.jpg',
             name:"HAPPY BIRTHDAY - TAY:THE ERAS NIGHT",
             location:"PITCHSIDE BLUE: chennai",
             Date:'Sat, 14 Dec'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00418508-nmyrxuexdz-portrait.jpg',
             name:"TVS MotoSoul 2024",
             location:"HillTop Vagator : Goa",
             Date:'Sun, 22 Dec'
          },
        
        ];

  return (
    <div>
    <h1 className='mt-4 ms-4'>Your Music Studio</h1>

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
           slidesPerView: 5,
           spaceBetween: 2,
       },
   }}
   modules={[Pagination]}
   className="mySwiper"
>
   {
       MusicStudio.map((musicstudio) => {
           return (
               <SwiperSlide key={musicstudio._id}>
                   <MusicStudioCard musicstudio={musicstudio}/>
               </SwiperSlide>
           )
       })
   }
</Swiper>

</div>   
</div> 
  )
}

export default MusicStudioCarousel