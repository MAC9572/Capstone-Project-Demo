
import './Premiere.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import PremiereCard from './PremiereCard'




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';




        
const PremiereCarousel = () =>{
 



  
const Premiere  =[
{
  
  imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00420828-zxpzdnrfuz-portrait.jpg',
   name:"In The Name of Father",
   language:"English"
},
{
  
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00398665-htdshwlqtm-portrait.jpg',
      name:"The Wild Robot",
     language:"English"
  },
  {
  
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00393438-tpnfyqsppx-portrait.jpg',
    name:"Just One Small Favour",
     language:"Spanish"
  },
  {
  
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00419574-htkctpwzjz-portrait.jpg',
    name:"1992",
     language:"English"
  },
  {
  
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00420798-tbfaeqvplu-portrait.jpg',
     name:"We live in Time",
     language:"English"
  },

];


  return (
    <div className='premiere_cont'>
  <div className='container'>

    <div className='cont '>
      <img src='https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png' alt="image" />
     </div> 

     <div className='cont-1'>
        <h3 className='fw-bold'>Premieres</h3>
        <p>Brand new releases every Friday</p>
     </div>
      
    
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
            Premiere.map((premiere) => {
                return (
               
                    <SwiperSlide key={premiere._id}>
                        <PremiereCard premiere={premiere}/>
                    </SwiperSlide>

               
                )
            })
        }
    </Swiper>
    
</div>   
</div>
</div>
)} 
    

export default PremiereCarousel