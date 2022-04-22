import { useCallback, useState } from 'react';
import styled from 'styled-components';

import 'rc-slider/assets/index.css';

import { PitchAdjustSlider } from './PitchAdjustSlider';
import { Platter } from './Platter';
import { Record } from './Record';
import { StartStopButton } from './StartStopButton';
import { Tonearm } from './Tonearm';

const TurntableWrapper = styled('div')`
  opacity: 0.6;
  max-width: 900px;
  position: relative;
  padding: 6%;
  width: 100vw;

  .turntable {
    background-color: #d1d1d6;
    background-image: url('turntable.jpg');
    background-size: cover;
    padding-bottom: 77.77%;
    position: relative;
    width: 100%;
  }
`;

export const Turntable = ({ isFlipped }) => {
  const [pitch, setPitch] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHolding, setIsHolding] = useState(false);
  const toggleIsPlaying = useCallback(() => {
    setIsPlaying(playing => !playing);
  }, [setIsPlaying]);

  const startHolding = useCallback(() => {
    setIsHolding(true);
  }, []);

  const stopHolding = useCallback(() => {
    setIsHolding(false);
  }, []);

  return (
    <TurntableWrapper>
      <div className="turntable">
        <StartStopButton isPlaying={isPlaying} onClick={toggleIsPlaying} />
        <Platter isHolding={isHolding} isPlaying={isPlaying}>
          <Record
            isFlipped={isFlipped}
            onRelease={stopHolding}
            onTouch={startHolding}
          />
        </Platter>
        <Tonearm />
        {/* <PitchAdjustSlider onChange={setPitch} value={pitch} /> */}
      </div>
    </TurntableWrapper>
  );
};
