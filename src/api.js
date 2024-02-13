import axios from 'axios';

const url = 'https://api.themoviedb.org/3/search/movie';
const urlTrend = 'https://api.themoviedb.org/3/trending/movie/week';
// const urlMovieID = 'https://api.themoviedb.org/3/movie/';

const API_KEY = '3e29d1368b4df9e4dcbc5ad16f462ff1';

const options = {
  params: {
    api_key: API_KEY,
    include_adult: false,
    language: 'en-US',
    page: 1,
  },
};

export const getFilm = async query => {
  try {
    const response = await axios.get(url, {
      params: {
        ...options.params,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTrendMovies = async query => {
  try {
    const response = await axios.get(urlTrend, {
      params: {
        ...options.params,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMoviesId = async movieId => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        ...options.params,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
