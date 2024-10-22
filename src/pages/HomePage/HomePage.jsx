// import { useState, useEffect } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import homeCss from './HomePage.module.css';
// import { trendingMovies } from '../../api/movies-api';

const HomePage = ({ moviesFAKE }) => {
  return (
    <main>
      <h1 className={homeCss.header}>Trending Today</h1>
      {<MovieList movies={moviesFAKE} />}
    </main>
  );
};

export default HomePage;
