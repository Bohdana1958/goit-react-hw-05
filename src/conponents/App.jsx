import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../conponents/NavBar';
import Movie from '../pages/Movie';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
