import { useCallback, useState } from 'react';
import Slider from 'rc-slider';
import styled from 'styled-components';

import 'rc-slider/assets/index.css';

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
  const [pitch, setPitch] = useState(50);
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
      <PitchAdjustHole>
        <Slider
          handleStyle={{
            background: '#ABABAB',
            border: 'solid 2px #161617',
            borderRadius: 3,
            height: 30,
            left: -12,
            opacity: 1,
            width: 48,
          }}
          onChange={setPitch}
          railStyle={{ display: 'none' }}
          trackStyle={{ display: 'none' }}
          value={pitch}
          vertical={true}
        />
      </PitchAdjustHole>
    </StyledTurntable>
  );
}
