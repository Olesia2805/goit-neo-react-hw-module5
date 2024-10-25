import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import homeCss from './HomePage.module.css';
import { tredingMovies } from '../../api/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setError(false);
        const trendingMovies = await tredingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h1 className={homeCss.header}>Trending Today</h1>
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
    </main>
  );
};

export default HomePage;
