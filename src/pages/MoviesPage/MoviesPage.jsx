import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { toast } from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import { fetchMovies } from '../../api/movies-api';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();

  const [params, setParams] = useSearchParams();
  const queryValue = params.get('title') ?? '';

  useEffect(() => {
    const getMovies = async () => {
      if (!queryValue) return;
      try {
        setError(false);
        setIsLoading(true);
        const searchMovies = await fetchMovies(queryValue);

        if (searchMovies.length === 0) {
          toast.error('No movies found.', {
            style: { background: 'red', color: '#fff' },
          });
          return;
        }

        const filterMovies = searchMovies?.filter(searchMovie =>
          searchMovie.title.toLowerCase().startsWith(queryValue.toLowerCase())
        );

        setMovies(filterMovies);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [queryValue]);

  const handleChange = inputValue => {
    if (inputValue.trim() === '') {
      params.delete('title');
      setParams(params);
      setMovies([]);
      toast.error('Please enter a valid search term', {
        style: { background: 'red', color: '#fff' },
      });
      return;
    }
    params.set('title', inputValue);
    setParams(params);
  };

  return (
    <>
      <SearchBar value={queryValue} onChange={handleChange} />
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
