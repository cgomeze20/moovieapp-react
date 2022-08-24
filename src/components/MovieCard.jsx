import React from 'react'
import {Link} from 'react-router-dom'
import styles from "./MovieCard.module.css";
import placeholder from '../placeholder.png'

export function MovieCard({ movie }) {
  const imageURL = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : placeholder;
  return (
    <li className={styles.movieCard}>
      <Link to={'/movies/'+ movie.id}>
      <img
        width={230}
        height={345}
        className={styles.movieImage}
        src={imageURL}
        alt={movie.title}
      />
      <div>{movie.title}</div>
      </Link>
    </li>
  );
}
