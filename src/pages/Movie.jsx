import { useEffect, useState } from 'react';
import SearchMovie from '../conponents/SearchMovie';
import { getFilm, getMoviesId } from '../api';

import { useParams } from 'react-router-dom';

export default function Movie() {
  const [films, setFilms] = useState([]);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const searchFilms = async query => {
    try {
      const response = await getFilm(query);
      setFilms(response.results);
      console.log(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMoviesId(movieId);
        console.log(response);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <SearchMovie onSearch={searchFilms} />
      {movie && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
      )}
    </div>
  );
}
