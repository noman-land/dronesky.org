import classNames from 'classnames';
import styled from 'styled-components';

const PlatterHole = styled('div')`
  align-items: center;
  background-color: #111;
  border-radius: 50%;
  display: flex;
  height: 95.5%;
  justify-content: center;
  left: 2.5%;
  position: absolute;
  top: 1.8%;
  width: 74.5%;
  z-index: 1;

  /* opacity: 0.7; */

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
`;

const PlatterOutside = styled('div')`
  background-color: #999;
  /* background-color: red; */
  border-radius: 50%;
  height: 99%;
  width: 99%;

  /* opacity: 0.7; */
`;

const PlatterMiddle = styled('div')`
  background-color: #444;
  border-radius: 50%;
  height: 98.5%;
  width: 98.5%;
`;

const PlatterInside = styled('div')`
  background-color: #999;
  border-radius: 50%;
  height: 92%;
  width: 92%;
`;

export const Platter = ({ children, isHolding, isPlaying }) => (
  <PlatterHole>
    <PlatterOutside
      className={classNames('flex-center', 'spin', {
        paused: !isPlaying || isHolding,
      })}
    >
      <PlatterMiddle className="flex-center">
        <PlatterInside className="flex-center">{children}</PlatterInside>
      </PlatterMiddle>
    </PlatterOutside>
  </PlatterHole>
);
