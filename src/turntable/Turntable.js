import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { PitchAdjustSlider } from './PitchAdjustSlider';
import { Platter } from './Platter';
import { Record } from './Record';
import { StartStopButton } from './StartStopButton';
import { Tonearm } from './Tonearm';

const TurntableWrapper = styled('div')`
  max-width: 900px;
  /* opacity: 0.6; */
  padding: 6%;
  position: relative;
  width: 100vw;

  .turntable {
    border-radius: 2px;
    background-color: #d1d1d6;
    /* background-image: url('turntable.jpg'); */
    background-size: cover;
    padding-bottom: 77.77%;
    position: relative;
    width: 100%;
  }
`;

const MIN = 8;
const MAX = 92;

export const Turntable = ({ isFlipped }) => {
  const [pitch, setPitch] = useState(50);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHolding, setIsHolding] = useState(false);

  const handlePitchChange = useCallback(
    value => {
      if (value < MIN) {
        return setPitch(MIN);
      }

      if (value > MAX) {
        return setPitch(MAX);
      }

      setPitch(value);
    },
    [setPitch]
  );

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
        {/* <Tonearm /> */}
        <PitchAdjustSlider onChange={handlePitchChange} value={pitch} />
      </div>
    </TurntableWrapper>
  );
};
