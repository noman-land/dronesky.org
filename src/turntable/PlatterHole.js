import styled from 'styled-components';

const StyledPlatterHole = styled('div')`
  background-color: #111;
  border-radius: 50%;
  height: 625px;
  left: 19px;
  position: absolute;
  top: 10px;
  width: 625px;  
`
export const PlatterHole = ({ children }) => (
  <StyledPlatterHole className='flex-center'>
    {children}
  </StyledPlatterHole>
);