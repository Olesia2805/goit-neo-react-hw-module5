import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { toast } from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import { fetchMovies } from '../../api/movies-api';
import { useLocation } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (!inputValue) return;

    const getMovies = async inputValue => {
      try {
        setError(false);
        setIsLoading(true);
        const searchMovies = await fetchMovies(inputValue);

        if (searchMovies.length === 0) {
          toast.error('Please enter the correct word', {
            style: {
              background: 'red',
              color: '#fff',
            },
          });
          return;
        }

        setMovies(searchMovies);

        const filterMovies = searchMovies.filter(movie =>
          movie.title.toLowerCase().startsWith(inputValue.toLowerCase())
        );

        if (filterMovies.length === 0) {
          toast.error('No movies found.', {
            style: {
              background: 'red',
              color: '#fff',
            },
          });
          return;
        }

        setMovies(filterMovies);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies(inputValue);
  }, [inputValue]);

  const handleSubmit = inputValue => {
    if (inputValue.trim() === '') {
      toast.error('Please enter a valid search term', {
        style: {
          background: 'red',
          color: '#fff',
        },
      });
      return;
    }
    setInputValue(inputValue);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Please try again.</p>}
      <>
        {movies.length > 0 ? (
          <MovieList movies={movies} location={location} />
        ) : (
          !isLoading &&
          !error && <p>No movies to display. Please search for a movie.</p>
        )}
      </>
    </>
  );
};

export default MoviePage;
