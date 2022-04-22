import { useCallback, useState } from 'react';
import styled from 'styled-components';

import 'rc-slider/assets/index.css';
import './App.css';

import { Turntable } from './turntable/Turntable';

const NextButton = styled('button')`
  margin-bottom: 16px;
  padding: 8px;
  font-size: 20px;
`;

const StyledApp = styled('div')`
  align-items: center;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

export const App = () => {
  const [isFlipped, setIsFlipped] = useState();
  const toggleIsFlipped = useCallback(() => {
    setIsFlipped(flipped => !flipped);
  }, [setIsFlipped]);

  return (
    <StyledApp>
      <NextButton onClick={toggleIsFlipped}>Next</NextButton>
      <Turntable isFlipped={isFlipped} />
    </StyledApp>
  );
};
