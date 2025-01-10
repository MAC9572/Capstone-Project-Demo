
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';




        
const MoviesCarousel = () =>{
 
  const navigate = useNavigate()


  
// const Movies  =[
// {
//   title : "Kanguva",
//   imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjk2LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-mxshwerpkj-portrait.jpg",
//   _id: "1",
//   rating : 8.5,
//   type:"Action/Thriller",
// },
// {
//   title : "Kanguva",
//   imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjk2LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-mxshwerpkj-portrait.jpg",
//   _id: "2",
//   rating : 8.5,
//   type:"Action/Thriller",
// },
// {
//   title : "Kanguva",
//   imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjk2LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-mxshwerpkj-portrait.jpg",
//   _id: "3",
//   rating : 8.5,
//   type:"Action/Thriller",
// },
// {
//   title : "Kanguva",
//   imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjk2LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-mxshwerpkj-portrait.jpg",
//   _id: "4",
//   rating : 8.5,
//   type:"Action/Thriller",
// },
// {
//   title : "Kanguva",
//   imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjk2LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-mxshwerpkj-portrait.jpg",
//   _id: "4",
//   rating : 8.5,
//   type:"Action/Thriller",
// },
// {
//   title : "Kanguva",
//   imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjk2LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-mxshwerpkj-portrait.jpg",
//   _id: "4",
//   rating : 8.5,
//   type:"Action/Thriller",
// },
// {
//   title : "Kanguva",
//   imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjk2LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-mxshwerpkj-portrait.jpg",
//   _id: "4",
//   rating : 8.5,
//   type:"Action/Thriller",
// },
// {
//   title : "Kanguva",
//   imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-Mjk2LjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00357490-mxshwerpkj-portrait.jpg",
//   _id: "5",
//   rating : 8.5,
//   type:"Action/Thriller",
// }
// ];

const [movies, setMovies] = useState([])


    const getMovies = async () => {
        fetch(`http://localhost:8000/movie/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.ok){
                   
                    setMovies(data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const [user, setUser] = useState(null)

    const getuser = async () => {
       
        fetch(`http://localhost:8000/auth/getuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => {
               if(response.ok){
                setUser(response.data)
                
               }
               else{
                navigate('/login')
               }
            })
            .catch((error) => {
                console.log(error)
            })
  
    }
    useEffect(() => {
        getuser();
        getMovies();
    }, [])

  return (
      
    <div>
         <h1 className='ms-4'>Movies</h1>
    
    <div className='sliderout p-4'>
    {
        movies && user && 
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
            movies.map((movie) => {
                return (
                    <SwiperSlide key={movie._id}>
                        <MovieCard 
                            movie={movie}
                            user={user}
                        />
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
    }
</div>   
</div> 
)} 
    

export default MoviesCarousel