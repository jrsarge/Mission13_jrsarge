import React from 'react';
import './App.css';
import TopBanner from '../Blah';
import MovieList from '../Movies';
import Body from '../Body';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Jacob's React Site - Main" />
      <MovieList></MovieList>
    </div>
  );
}

export default App;
