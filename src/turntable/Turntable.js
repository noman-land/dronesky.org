import styled from 'styled-components';

import { Platter } from './Platter';
import { PlatterHole } from './PlatterHole';
import { Record } from './Record';
import { StartStopButton } from './StartStopButton';

const StyledTurntable = styled('div')`
  background-color: #d1d1d1;
  /* background-image: url('turntable.jpg'); */
  background-size: cover;
  height: 648px;
  position: relative;
  width: 838px;
`

export const Turntable = () => (
  <StyledTurntable>
    <PlatterHole>
      <Platter>
        <Record />
      </Platter>
    </PlatterHole>
    <StartStopButton />
  </StyledTurntable>
);
