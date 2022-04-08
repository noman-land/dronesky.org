import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { PitchAdjustSlider } from './PitchAdjustSlider';
import { Platter } from './Platter';
import { PlatterHole } from './PlatterHole';
import { Record } from './Record';
import { StartStopButton } from './StartStopButton';

const ButtonHole = styled('div')`
  align-items: center;
  background-color: #161617;
  border-radius: 4px;
  bottom: 19px;
  display: flex;
  height: 64px;
  justify-content: center;
  left: 20px;
  position: absolute;
  width: 80px;
`;

const StyledTurntable = styled('div')`
  background-color: #d1d1d6;
  /* background-image: url('turntable.jpg'); */
  background-size: cover;
  height: 648px;
  position: relative;
  width: 838px;
`;

const PitchAdjustHole = styled('div')`
  background-color: #d1d1d6;
  border-radius: 4px;
  border: solid black 2px;
  bottom: 78px;
  display: flex;
  height: 224px;
  justify-content: center;
  position: absolute;
  right: 44px;
  width: 32px;

  &::before {
    background: #161617;
    border-radius: 4px;
    bottom: 11px;
    content: ' ';
    height: 202px;
    left: 12px;
    position: absolute;
    width: 8px;
  }
`;

export const Turntable = ({ isFlipped }) => {
  const [clientY, setClientY] = useState(290);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHolding, setIsHolding] = useState(false);
  const toggleIsPlaying = useCallback(() => {
    setIsPlaying(playing => !playing);
  }, [setIsPlaying])

  const startHolding = useCallback(() => {
    setIsHolding(true)
  }, [])

  const stopHolding = useCallback(() => {
    setIsHolding(false)
  }, [])

  const callback = useCallback(({ clientY }) => {
    setClientY(clientY);
  }, []);

  return (
    <StyledTurntable>
      <ButtonHole>
        <StartStopButton onClick={toggleIsPlaying}/>
      </ButtonHole>
      <PlatterHole>
        <Platter
          isHolding={isHolding}
          isPlaying={isPlaying}
        >
          <Record
            isFlipped={isFlipped}
            onRelease={stopHolding}
            onTouch={startHolding}
          />
        </Platter>
      </PlatterHole>
      <PitchAdjustHole 
        onDragOver={callback}
      >
        <PitchAdjustSlider clientY={clientY}/>
      </PitchAdjustHole>
    </StyledTurntable>
  );
}
