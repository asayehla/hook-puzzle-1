import React from 'react';
import Randomize from '../../Hooks/Randomize';
import PuzzleBoard from '../../components/PuzzleBoard/index.jsx';
import { StyledWrapper, StyledPuzzle } from './style';

const PuzzleView = array => {

    const clickHandlerRandomize = (e) => {
        e.preventDefault();
        Randomize(array);
        window.location.reload(false);
    }

    return (
        <StyledWrapper>
            <StyledPuzzle>
                <h1>The Game of 15</h1>
                <div className="puzzle">
                    <PuzzleBoard array={array} />
                </div>
                <div>
                    <button className="button" aria-label="button" onClick={clickHandlerRandomize}>Randomize</button>
                </div>
            </StyledPuzzle>
        </StyledWrapper>
    );

};

export default PuzzleView; 