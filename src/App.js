import styled from 'styled-components';

import './App.css';

import { Turntable } from './turntable/Turntable';

const StyledApp = styled('div')`
  align-items: center;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`

export const App = () => (
  <StyledApp>
    <Turntable />
  </StyledApp>
);
