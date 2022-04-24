import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FLIP_TIME_IN_MS, FLIP_TIME_IN_SECONDS } from './Constants';

const RecordDiv = styled('div')`
  background: #161617;
  border-radius: 50%;
  height: 98%;
  width: 98%;

  @keyframes flip {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(180deg);
    }
  }

  @keyframes unflip {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  &.flip,
  .flip {
    animation: flip 1 ${FLIP_TIME_IN_SECONDS}s linear;
    animation-fill-mode: forwards;
  }

  &.unflip,
  .unflip {
    animation: unflip 1 ${FLIP_TIME_IN_SECONDS}s linear;
    animation-fill-mode: forwards;
  }
`;

const LabelDiv = styled('div')`
  background: white;
  border-radius: 50%;
  height: 43%;
  position: relative;
  width: 43%;
`;

const TopText = styled('div')`
  color: black;
  font-size: 2rem;
  font-weight: 200;
  position: absolute;
  text-align: center;
  top: 20%;

  @media (max-width: 800px) {
    transform: 1.8rem;
  }
  @media (max-width: 750px) {
    font-size: 1.7rem;
  }
  @media (max-width: 700px) {
    font-size: 1.6rem;
  }
  @media (max-width: 650px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
  @media (max-width: 550px) {
    font-size: 1.3rem;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
  @media (max-width: 425px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-size: 0.95rem;
  }
  @media (max-width: 375px) {
    font-size: 0.85rem;
  }
  @media (max-width: 350px) {
    font-size: 0.77rem;
  }
  @media (max-width: 325px) {
    font-size: 0.65rem;
  }
`;

const BottomText = styled('div')`
  position: absolute;
  bottom: 20%;
  color: black;
  font-size: 90%;
  font-weight: 200;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 85%;
  }
  @media (max-width: 750px) {
    font-size: 82%;
  }
  @media (max-width: 700px) {
    font-size: 79%;
  }
  @media (max-width: 650px) {
    font-size: 76%;
  }
  @media (max-width: 600px) {
    font-size: 73%;
  }
  @media (max-width: 550px) {
    font-size: 70%;
  }
  @media (max-width: 500px) {
    font-size: 68.5%;
  }
  @media (max-width: 475px) {
    font-size: 66%;
  }
  @media (max-width: 450px) {
    font-size: 64.5%;
  }
  @media (max-width: 425px) {
    font-size: 63%;
  }
  @media (max-width: 400px) {
    font-size: 61.5%;
  }
  @media (max-width: 375px) {
    font-size: 60%;
  }
  @media (max-width: 350px) {
    transform: scale(0.9);
  }
  @media (max-width: 325px) {
    transform: scale(0.8);
  }
  @media (max-width: 300px) {
    transform: scale(0.7);
  }
  @media (max-width: 275px) {
    transform: scale(0.6);
  }
`;

const HoleDiv = styled('div')`
  background: #282c34;
  border-radius: 50%;
  height: 5%;
  width: 5%;
`;

export const Record = ({ isFlipped, onTouch, onRelease }) => {
  const [trackNum, setTrackNum] = useState(1);
  const flippedClasses = {
    flip: isFlipped === true,
    unflip: isFlipped === false,
  };

  useEffect(() => {
    if (isFlipped !== undefined) {
      setTimeout(() => setTrackNum(n => n + 1), FLIP_TIME_IN_MS / 2);
    }
  }, [isFlipped]);

  return (
    <RecordDiv
      className={classNames('flex-center', flippedClasses)}
      onMouseDown={onTouch}
      onMouseUp={onRelease}
      onTouchEnd={onRelease}
      onTouchStart={onTouch}
    >
      <LabelDiv className="flex-center">
        <TopText className={classNames(flippedClasses)}>Drone Sky</TopText>
        <HoleDiv />
        <BottomText className={classNames(flippedClasses)}>
          Side {trackNum}
        </BottomText>
      </LabelDiv>
    </RecordDiv>
  );
};
