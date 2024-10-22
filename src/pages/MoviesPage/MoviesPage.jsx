import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { toast } from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../api/movies-api';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!inputValue) return;

    const getPage = async () => {
      try {
        setError(false);
        setIsLoading(true);

        const res = await fetchMovies(inputValue);
        if (res.length === 0) {
          toast.error('Please enter the correct word');
        }
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPage();
  }, [inputValue]);

  const handleSubmit = inputValue => {
    if (inputValue.trim() === '') {
      toast.error('Please enter a valid search term');
      return;
    }

    setInputValue(inputValue);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong. Please try again.</p>}
      <div>
        {movies.length > 0 ? (
          <MovieList />
        ) : (
          !isLoading &&
          !error && <p>No movies to display. Please search for a movie.</p>
        )}
      </div>
    </>
  );
};

export default MoviePage;
