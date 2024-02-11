import { getFilm } from './api';

function App() {
  const searchFilms = async query => {
    try {
      const response = await getFilm(query);
      console.log({ response });
    } catch (error) {}
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchFilms(e.target.elements.search.value); // Hier onSearch!
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="What film do you search?" name="search" required autoFocus />
      <button>Submit</button>
    </form>
  );
}
export default App;
