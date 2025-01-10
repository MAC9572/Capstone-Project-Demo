import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import './OutDoor.css'
import OutDoorCard from './OutDoorCard';

const OutDoorCarousel = () => {

    const OutDoor  =[
        {
          
          imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA3IERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,lx-15,ly-15,w-50,l-end/et00410843-rsukzyrvfx-portrait.jpg',
           name:"CHENNAIYIN FC - ISL 2024/2025 onwards",
           location:"Jawaharlal Nehru Stadium: Chennai ",
           Date:'Sat, 07 Dec'
        },
        {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxIERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00403069-jylskdyhsw-portrait.jpg',
             name:"VGP Marine Kingdom-  Chennai",
             location:"VGP Marine Kingdom-  Chennai",
             Date:'Sun, 01 Dec onwards'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA1IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00396152-lradewcaad-portrait.jpg',
             name:"HAPPY ENDING - A Live Standup Show by Nesan David",
             location:"Sri Mutha Venkatasubha Rao Concert Hall: Chennai",
             Date:'Sun, 05 Jan'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxIERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00307957-jfncaxmutw-portrait.jpg',
             name:"SNOW KINGDOM CHENNAI",
             location:"VGP Universal Kingdom : Chennai",
             Date:'Sun, 01 Dec onwards'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxIERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00366435-kmtrexwaex-portrait.jpg',
             name:"Play 'N' Learn VR Mall: chennai",
             location:"Play 'N' Learn VR Mall: chennai",
             Date:'Sun, 01 Dec onwards'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA4IERlYw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421115-pblvefpptw-portrait.jpg',
             name:"LITJAM CHENNAI - A JAMMING SHOW EDITION 2",
             location:"IDAM- The Art & cultural space : chennai",
             Date:'Sun, 08 Dec'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCA2IERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421037-epztaxdcnj-portrait.jpg',
             name:"LEGO WINTER PLAYGROUND THE QUEST TO SAVE CHRISTMAS",
             location:"Express Avenue : chennai",
             Date:'Fri, 06 Dec'
          },
          {
          
            imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCA4IERlYyBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00358311-ulyxvjaamr-portrait.jpg',
             name:"Chess - Chai - Concerts",
             location:"Chaii:Galli chennai",
             Date:'Sun, 08 Dec onwards'
          },
        
        ];

  return (
    <div>
    <h1 className='mt-4 ms-4'>OutDoor Events</h1>

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
       OutDoor.map((outdoor) => {
           return (
               <SwiperSlide key={outdoor._id}>
                   <OutDoorCard outdoor={outdoor}/>
               </SwiperSlide>
           )
       })
   }
</Swiper>

</div>   
</div> 
  )
}

export default OutDoorCarousel