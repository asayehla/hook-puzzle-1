import styled from 'styled-components';

export const StyledCell = styled.div`
        font-size: 2rem;
        background-color: ${props => (props.green ? '#dedad3' : '#dedad3' )};
        border: ${props => (props.green ? 'green 2px solid' :'rgba(0, 0, 0, 0.9) 2px solid' )};
        color: black;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background-color: #a7a7a7;
        }
  

      `;