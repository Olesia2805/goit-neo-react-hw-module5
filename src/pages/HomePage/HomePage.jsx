import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import homeCss from './HomePage.module.css';
import { trendingMovies } from '../../api/movies-api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const trendingMoviesList = await trendingMovies();
        setMovies(trendingMoviesList);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch trending movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h1 className={homeCss.header}>Trending Today</h1>
      {isLoading && <p>Loading movies...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && <MovieList movies={movies} />}
    </main>
  );
};

export default HomePage;
