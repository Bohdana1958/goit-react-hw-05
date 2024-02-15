import { Link } from 'react-router-dom';

const TrendingMovies = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movie/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default TrendingMovies;

// function createMarkup(array) {
//   return (
//     <ul>
//       {array.map(item => {
//         return (
//           <li key={item.id}>
//             <Link to={'/movies/' + item.id} state={location}>
//               {item.title}
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
