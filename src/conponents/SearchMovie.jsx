const SearchMovie = ({ onSearch, value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (!query) return;
    onSearch(query);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What film do you search?"
        name="search"
        required
        autoFocus
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchMovie;
