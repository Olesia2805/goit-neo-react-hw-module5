import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { toast } from 'react-hot-toast';
import MovieList from '../../components/MovieList/MovieList';
import movieFAKE from '../../fakeApi.json';
import Loader from '../../components/Loader/Loader';
// import { fetchMovies } from '../../api/movies-api';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!inputValue) return;

    const getMovies = () => {
      setError(false);
      setIsLoading(true);

      // const filterMovies = movieFAKE.filter(movie =>
      //   movie.title.toLowerCase().startsWith(inputValue.toLowerCase())
      // );

      // if (filterMovies.length === 0) {
      //   toast.error('No movies found.');
      // }

      // setMovies(filterMovies);
      // setIsLoading(false);

      setTimeout(() => {
        const filteredMovies = movieFAKE.filter(movie =>
          movie.title.toLowerCase().startsWith(inputValue.toLowerCase())
        );

        if (filteredMovies.length === 0) {
          toast.error('No movies found. Please enter the correct word');
        }

        setMovies(filteredMovies);
        setIsLoading(false); // Завантаження завершене
      }, 2000); // Затримка в 2 секунди
    };

    getMovies();
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
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Please try again.</p>}
      <div>
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          !isLoading &&
          !error && <p>No movies to display. Please search for a movie.</p>
        )}
      </div>
    </>
  );
};

export default MoviePage;
