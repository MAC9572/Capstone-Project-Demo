
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'





const CreateMoviePage = () => {

  const [movie, setMovie] = useState({
    title: "",
    description: "",
    portraitImgUrl: "",
    portraitImg: null,
    landscapeImgUrl: "",
    landscapeImg: null,
    rating: 0,
    genre: [],
    duration: 0,
  });

  const genres = [
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Science Fiction",
    "Thriller",
    "Other",
  ];

  const handleGenreChange = (genre) => {
    if (movie.genre.includes(genre)) {
      setMovie({
        ...movie,
        genre: movie.genre.filter((selectedGenre) => selectedGenre !== genre),
      });
    }
    else {
      setMovie({ ...movie, genre: [...movie.genre, genre] });

    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const uploadImage = async (image) => {
    try {
      const formData = new FormData();
      formData.append("myimage", image);
      const response = await fetch(
        `http://localhost:8000/image/uploadimage`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Image uploaded successfully:", data);
        return data.imageUrl;
      } else {
        console.error("Failed to upload the image.");
        return null;
      }
    }
    catch (error) {
      console.error("Error:", error);
      return null;
    }
  }
  const handleCreateMovie = async () => {
    try {
      if (
        movie.title === "" ||
        movie.description === "" ||
        movie.rating === 0 ||
        movie.genre.length === 0 ||
        movie.duration === 0
      ) {
        toast.error("Please fill all the fields", {
         
        });
        return;
      }

      let portraitImgUrl = movie.portraitImgUrl;
      let landscapeImgUrl = movie.landscapeImgUrl;

      if (movie.portraitImg) {
        portraitImgUrl = await uploadImage(movie.portraitImg);
        if (!portraitImgUrl) {
          toast.error("Portrait Image upload failed", {
          
          });
          return;
        }
      }
      if (movie.landscapeImg) {
        landscapeImgUrl = await uploadImage(movie.landscapeImg);
        if (!landscapeImgUrl) {
          toast.error("Landscape Image upload failed", {
            
          });
          return;
        }
      }

      const newMovie = { ...movie, portraitImgUrl, landscapeImgUrl };

      const response = await fetch(
        `http://localhost:8000/movie/createmovie`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMovie),
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Movie creation successful", data);

        toast.success("Movie Created Successfully", {
          
        });
      } else {
        console.error("Movie creation failed", response.statusText);
        toast.error("Movie Creation Failed", {
          
        });
      }
    }
    catch (error) {
      console.error("An error occurred during movie creation", error);
    }
  }

  const handlePortraitImageChange = (event) =>{
    if(event.target.files && event.target.files.length > 0){
      setMovie({...movie,portraitImg:event.target.files[0]})
    }
  };

  const handleLandScapeImageChange = (event) =>{
    if(event.target.files && event.target.files.length > 0){
      setMovie({...movie,landscapeImg:event.target.files[0]})
    }
  };

  return (
    <div className="formpage ps-5">
      <ToastContainer/>
      <label className="fs-2 mt-5">Movie Name</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={movie.title}
        onChange={handleInputChange}
      />
      <br />
      <label className="fs-2">About the movie</label>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={movie.description}
        onChange={handleInputChange}
      />
      <br />
      <label className="fs-2">Portrait Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handlePortraitImageChange}
      />
      <br />
      <label className="fs-2">Landscape Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleLandScapeImageChange}
      />
      <br />

      <label className="fs-2">Rating</label>
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={movie.rating}
        onChange={handleInputChange}
      />
      <br />
      <div>
        <label className="fs-2">Select Genres:</label><br />
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              name="genre"
              checked={movie.genre.includes(genre)}
              onChange={() => handleGenreChange(genre)}
            />
            {genre}
          </label>
        ))}
      </div>

      <br />

      <label className="fs-2">Duration</label>
      <input
        type="number"
        name="duration"
        placeholder="Duration"
        value={movie.duration}
        onChange={handleInputChange}
      />
      <br />

      <button onClick={handleCreateMovie} className="mb-5">Create Movie</button>

    </div>
  )
}

export default CreateMoviePage