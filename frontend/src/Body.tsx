import React from 'react';
import Home from './Home';
import Podcasts from './Podcasts';
import MovieList from './Movies';

function Body(props: any) {
  switch (props.dest) {
    case 'Home':
      return <Home />;
    case 'Podcasts':
      return <Podcasts />;
    case 'Movies':
      return <MovieList />;
    default:
      return <Home />;
  }
}

export default Body;
