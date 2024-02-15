import { useEffect, useState } from 'react';
import { getTrendMovies } from '../api';
import TrendingMovies from '../conponents/TrendingMovies';
import { Loader } from '../conponents/Loader';

export default function Home() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const trendingFilms = async () => {
    try {
      setLoading(true);
      const response = await getTrendMovies();
      setMovies(response.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    trendingFilms();
  }, []);

  return (
    <div>
      {error && <p>Oops! Something went wrong. Please try again later.</p>}
      {loading && <Loader />}
      {movies.length > 0 && <TrendingMovies items={movies} />}
    </div>
  );
}
