import styled from 'styled-components';

export const StyledBoard = styled.div`

    background-color: #ffba33;
    display: grid;
    grid-template-rows: repeat(4, 1fr); 
    grid-template-columns: repeat(4, 1fr); 
    grid-gap: 5px;
    border: 2px solid #333;
    width: 78vw;
    height: 78vw;
    padding: 1rem;

    @media screen and (min-width: 992px) {
        width: 30vw;
        height: 30vw;
    }
`;