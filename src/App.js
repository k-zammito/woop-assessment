import React from 'react';
import Albums from './Albums';
import { sortedAlbums } from './sortAlbums';

const App = () => {
  return (
    <div className="app">
      <Albums albums={sortedAlbums} />
    </div>
  );
};

export default App;
