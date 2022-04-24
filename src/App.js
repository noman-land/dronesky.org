import { useCallback, useState } from 'react';
import styled from 'styled-components';

import 'rc-slider/assets/index.css';
import './App.css';

import { FLIP_TIME_IN_MS } from './turntable/Constants';
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFlipped, setIsFlipped] = useState();

  const toggleIsFlipped = useCallback(() => {
    setIsPlaying(false);
    setIsFlipped(flipped => !flipped);
    setTimeout(() => setIsPlaying(true), FLIP_TIME_IN_MS);
  }, [setIsFlipped]);

  const toggleIsPlaying = useCallback(() => {
    setIsPlaying(playing => !playing);
  }, [setIsPlaying]);

  return (
    <StyledApp>
      <NextButton onClick={toggleIsFlipped}>Next</NextButton>
      <Turntable
        isFlipped={isFlipped}
        isPlaying={isPlaying}
        onStartStop={toggleIsPlaying}
      />
    </StyledApp>
  );
};
