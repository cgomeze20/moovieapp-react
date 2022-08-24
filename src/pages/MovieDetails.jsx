import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { Spinner } from "../components/Spinner";
import { useQuery} from '../hooks/useQuery'
import { get } from "../utils/httpClient";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import placeholder from '../placeholder.png'

export function MovieDetails() {
  const {movieId} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [movie,setMovie] = useState(null)

  const query = useQuery();
  const search = query.get('search')



useEffect(()=>{
  setIsLoading(true)
  get('/movie/'+ movieId).then(data =>{
    setMovie(data)
    setIsLoading(false)
  })
},[movieId])

if(isLoading){
  return <Spinner/>
}

// if(!movie){
//   return null
// }

  const imageURL = movie.poster_path 
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
                  : placeholder;

  return (
    <div className={styles.detailsContainer}>
      <img className = {`${styles.col} ${styles.movieImage}`} src={imageURL} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
