const SearchMovie = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(e.target.elements.search.value);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="What film do you search?" name="search" required autoFocus />
      <button>Submit</button>
    </form>
  );
};

export default SearchMovie;
