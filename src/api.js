import axios from 'axios';
const url = 'https://api.themoviedb.org/3';
const API_KEY = 'e4a8696eee08b7b816fc51eb8d97a3cc';

const options = {
  params: {
    include_adult: false,
    language: 'en-US',
    page: 1,
  },
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getFilm = async query => {
  const response = await axios.get(`search/movie?query=${query}`);
  console.log(response);
  return response.data;
};

axios
  .get(`${url}/search/movie`, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));

// import axios from 'axios';

// const API_KEY = 'e4a8696eee08b7b816fc51eb8d97a3cc';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;
// axios.defaults.params = {
//   include_adult: false,
//   language: 'en-US',
//   page: 1,
// };

// export const getFilm = async query => {
//   const response = await axios.get(`search/movie?query=${query}`);
//   console.log(response);

//   return response.data;
// };
