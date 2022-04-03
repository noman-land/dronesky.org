import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { Platter } from './Platter';
import { PlatterHole } from './PlatterHole';
import { Record } from './Record';
import { StartStopButton } from './StartStopButton';

const StyledTurntable = styled('div')`
  background-color: #d1d1d6;
  /* background-image: url('turntable.jpg'); */
  background-size: cover;
  height: 648px;
  position: relative;
  width: 838px;
`

export const Turntable = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const toggleIsPlaying = useCallback(() => {
    setIsPlaying(playing => !playing);
  }, [setIsPlaying])
  return (
    <StyledTurntable>
      <PlatterHole>
        <Platter isPlaying={isPlaying}>
          <Record />
        </Platter>
      </PlatterHole>
      <StartStopButton onClick={toggleIsPlaying}/>
    </StyledTurntable>
  );
}
