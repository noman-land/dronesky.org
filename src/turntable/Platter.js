import classNames from 'classnames';
import styled from 'styled-components';

const PlatterHole = styled('div')`
  background-color: #111;
  border-radius: 50%;
  height: 625px;
  left: 19px;
  position: absolute;
  top: 10px;
  width: 625px;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .spin {
    animation: spin infinite 5s linear;
  }

  .paused {
    animation-play-state: paused;
  }
`

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