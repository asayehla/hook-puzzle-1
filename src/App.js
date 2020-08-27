import React, { useState } from 'react';
import Randomize from './Hooks/Randomize';

import './App.scss';
import PuzzleView from './views/PuzzleView';

const App = props => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0]);
  Randomize(array);

  return (
    <div className="App">
      <PuzzleView array={array} />
    </div>
  );
}

export default App;
