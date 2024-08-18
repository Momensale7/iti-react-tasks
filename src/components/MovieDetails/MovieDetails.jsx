import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { LangContext } from "../contexts/langContext";

export default function MovieDetails() {
  const [movie,setMovie]=useState({})
  const {lang } =useContext(LangContext)
  const { id } = useParams();
  const getmovie=(id,lang)=>{
     axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=29cf44b93ca83bf48d9356395476f7ad&language=${lang}`)
     .then((res)=>{
        console.log(res.data);
        setMovie(res.data)
     }).catch((err)=>console.log(err));
  }
  useEffect(()=>{
     getmovie(id,lang)
  },[lang])
  return (
    <div>
        <div className=" text-white">
          <div className="row  p-4 shadow-lg ">
        <div className="col-md-5">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid" alt={movie.title} />
        </div>
        <div className="col-md-7">
      <h1 className="text-primary">{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
        </div>
      
          </div>
    </div>
    </div>
  )
}

