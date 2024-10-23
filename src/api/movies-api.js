import axios from 'axios';

const TMDB_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjliMjE5NjI4OTUwYmY4YmM0ZDFlMDJhYzA3OWRlNiIsIm5iZiI6MTcyOTU0MzY4NC43MDkwMywic3ViIjoiNjcxNmI5NTk0YTlmYzA2ZDI1NzUyN2FmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OjYHnI335dYZ4rc4dHGkd_MPpqkdLHtKB1blMabxNY0';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${TMDB_API_TOKEN}`,
  },
});

export const tredingMovies = async () => {
  try {
    const response = await axiosInstance.get('/trending/movie/day', {
      params: {
        language: 'en-US',
        include_adult: false,
      },
    });

    return response.data.results;
    
  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};


export const fetchMovies = async (query) => {
  try {
    const response = await axiosInstance.get('/search/movie', {
      params: {
        query,
        language: 'en-US',
        include_adult: false,
      },
    });

    return response.data.results;

  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};

export const fetchSingleMovie = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;

  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`);
    return response.data.results;

  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
    return response.data.results;

  } catch (error) {
    console.error('Error fetching movies:', error.message);
  }
};
