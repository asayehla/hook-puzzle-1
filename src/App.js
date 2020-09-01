import React from 'react';
import randomize from './randomize';
import './App.scss';
import PuzzleView from './views/PuzzleView';

const App = props => {
 
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  
  randomize(array);

  return (
    <div className="App">
      <PuzzleView array={array} />
    </div>
  );
}

export default App;
