import styled from 'styled-components';

import './App.css';

import { Record } from './turntable/Record';

const StyledApp = styled('div')`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

export const App = () => (
  <StyledApp>
    <Record />
  </StyledApp>
);

export default App;
