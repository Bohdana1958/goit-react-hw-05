const TrendingMovies = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <a
            href={`https://www.themoviedb.org/movie/${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default TrendingMovies;
