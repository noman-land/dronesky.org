import classNames from 'classnames';
import styled from 'styled-components';

import { PlatterHole } from './PlatterHole';

const PlatterOutside = styled('div')`
  background-color: #999;
  border-radius: 50%;
  height: 619px;
  left: 18px;
  top: 9px;
  width: 619px;
`

const PlatterMiddle = styled('div')`
  background-color: #444;
  border-radius: 50%;
  height: 611px;
  width: 611px;
`;

const PlatterInside = styled('div')`
  background-color: #999;
  border-radius: 50%;
  height: 560px;
  width: 560px;
`

export const Platter = ({
  children,
  isHolding,
  isPlaying,
}) => (
  <PlatterHole>
    <PlatterOutside className={
      classNames('flex-center', 'spin', {
        paused: !isPlaying || isHolding,
      })
    }>
      <PlatterMiddle className='flex-center'>
        <PlatterInside className='flex-center'>
          {children}
        </PlatterInside>
      </PlatterMiddle>
    </PlatterOutside>
  </PlatterHole>
);