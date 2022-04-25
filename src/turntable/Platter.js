import classNames from 'classnames';
import styled, { css } from 'styled-components';

const PlatterHole = styled.div`
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
`;

const PlatterOutside = styled.div`
  background-color: #999;
  border-radius: 50%;
  height: 99%;
  width: 99%;

  &.spin {
    animation: spin infinite 5s linear;

    /* ${({ pitch = 0.0 }) => css`
      // 33.3 rpm = 1.8s per rotation
      animation: spin infinite ${1.8 * pitch}s linear;
    `} */
  }

  &.paused {
    animation-play-state: paused;
  }
`;

const PlatterMiddle = styled.div`
  background-color: #444;
  border-radius: 50%;
  height: 98.5%;
  width: 98.5%;
`;

const PlatterInside = styled.div`
  background-color: #999;
  border-radius: 50%;
  height: 92%;
  width: 92%;
`;

export const Platter = ({ children, isHolding, isPlaying, pitch }) =>
  console.log(pitch) || (
    <PlatterHole>
      <PlatterOutside
        className={classNames('flex-center', 'spin', {
          paused: !isPlaying || isHolding,
        })}
        pitch={pitch}
      >
        <PlatterMiddle className="flex-center">
          <PlatterInside className="flex-center">{children}</PlatterInside>
        </PlatterMiddle>
      </PlatterOutside>
    </PlatterHole>
  );
