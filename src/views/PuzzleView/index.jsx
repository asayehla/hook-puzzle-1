import React from 'react';
import Randomize from '../../Hooks/Randomize';
import CreatePuzzleBoard from '../../components/PuzzleBoard/index.jsx';

const PuzzleView = array => {

    const clickHandler = (e) => {
        e.preventDefault();
        Randomize(array);
        window.location.reload(false);
    }

    return (
        <div>
            <h1>The Game of 15</h1>
            <div className="puzzle">
                <CreatePuzzleBoard array={array} />
            </div>
            <div className="button" aria-label="button" onClick={clickHandler}>Randomize</div>
        </div>
    );

};

export default PuzzleView; 