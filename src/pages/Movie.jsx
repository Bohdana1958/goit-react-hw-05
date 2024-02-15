import { useState } from 'react';
import SearchMovie from '../conponents/SearchMovie';
import { getFilm } from '../api';
import MovieDetails from '../conponents/MovieDetails';
import { Loader } from '../conponents/Loader';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Movie() {
  const location = useLocation();
  console.log(location);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const search = params.get('search') ?? '';

  const changeSearch = newSearch => {
    params.set('search', newSearch);
    setParams(params);
  };

  const searchFilms = async query => {
    try {
      setLoading(true);
      const response = await getFilm(query);
      setFilms(response.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p>Oops! Something went wrong. Please try again later.</p>}
      {loading && <Loader />}
      <SearchMovie onSearch={searchFilms} value={search} onChange={changeSearch} />
      {films.length > 0 && <MovieDetails items={films} />}
    </div>
  );
}
