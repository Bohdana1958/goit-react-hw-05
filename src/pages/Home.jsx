import { useEffect, useState } from 'react';
import { getTrendMovies } from '../api';
import TrendingMovies from '../conponents/TrendingMovies';
export default function Home() {
  const [movies, setMovies] = useState([]);

  const trendingFilms = async () => {
    try {
      const response = await getTrendMovies();
      setMovies(response.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    trendingFilms();
  }, []);

  return <div>{movies.length > 0 && <TrendingMovies items={movies} />}</div>;
}
