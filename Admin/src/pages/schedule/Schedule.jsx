
import React,{ useState } from 'react'
import './Schedule.css'
import { ToastContainer, toast } from "react-toastify";



// interface schedule {
//   screenId: string,
//   movieId: string,
//   showTime: string,
//   showDate: string
// }
// interface Screen {
//   _id: string;
//   name: string;
//   location: string;
//   seats: any[]; // Change the type to an array of numbers
//   city: string;
//   screenType: string;
// }

// interface Movie {
//   _id: string;
//   title: string;
//   description: string;
//   portraitImgUrl: string;
//   portraitImg: File | null;
//   landscapeImgUrl: string;
//   landscapeImg: File | null;
//   rating: number;
//   genre: string[];
//   duration: number;
// }

const page = () => {
  const [schedule, setSchedule] = useState({
    screenId: '',
    movieId: '',
    showTime: '',
    showDate: ''
  })

  const [city, setCity] = React.useState('')
  const [screens, setScreens] = React.useState([])
  const [movies, setMovies] = React.useState([])

  const getMovies = async () => {
    const res = await fetch(`http://localhost:8000/movie/movies`)
    const data = await res.json()
    setMovies(data.data)
    console.log(data.data)
  }

  React.useEffect(() => {
    getMovies()
  }, [])



  const getScreensByCity = async () => {
    if (city === '') return toast.error('Please select a city')
    const res = await fetch(`http://localhost:8000/movie/screensbycity/${city.toLowerCase()}`)
    const data = await res.json()
    setScreens(data.data)
    console.log(data.data)
  }

  const createSchedule = async () => {
    if (!schedule.screenId || !schedule.movieId || !schedule.showTime || !schedule.showDate) {
      toast.error("Please fill all the fields");
      return
    }

    const res = await fetch(`http://localhost:8000/movie/addmoviescheduletoscreen`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(schedule)
    })


    const data = await res.json()
    console.log(data)
    if (data.ok) {
      toast.success("Schedule created successfully");
    } else {
      toast.error("Schedule creation failed");
    }

  }
  
  return (
    <div className="formpage">
      <ToastContainer/>
      <div className='citysearch mt-5'>
        <input type="text" name="city" id="city"
          placeholder='City'
          value={city}

          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={() => getScreensByCity()}
        >Search</button>
      </div>

      <div className='items'>
        <h1 className='fs-2'>Screens</h1>
        {
          screens?.map((screen, index) => (
            <div className={
              schedule.screenId === screen._id ? 'item selected' : 'item'
            } key={index}
              onClick={() => {
                setSchedule({ ...schedule, screenId: screen._id })
              }}
            >
              <p>{screen.name}</p>
              <p>{screen.location}</p>
              <p>{screen.city}</p>
              <p>{screen.screenType}</p>
            </div>
          ))}
      </div>


      <div className='items'>
        <h1 className='fs-2 '>Movies</h1>
        {
          movies?.map((movie, index) => (
            <div className={
              schedule.movieId === movie._id ? 'item selected' : 'item'
            } key={index}
              onClick={() => {
                setSchedule({ ...schedule, movieId: movie._id })
              }}
            >
              <p>{movie.title}</p>
              <p>{movie.description}</p>
              <p>{movie.rating}</p>
              <p>{movie.genre}</p>
              <p>{movie.duration}</p>
            </div>
          ))}
      </div>


      <input type="time" name="showTime" id="showTime"
        onChange={(e) => setSchedule({ ...schedule, showTime: e.target.value })}
      />
      <input type="date" name="showDate" id="showDate"
        onChange={(e) => setSchedule({ ...schedule, showDate: e.target.value })}
      />

      <button
        onClick={() => {
          createSchedule()
        }} className='mb-5'
      >Save</button>
    </div>
  )
}

export default page