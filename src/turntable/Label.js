import classNames from 'classnames';
import { useMemo } from 'react';
import styled from 'styled-components';
import { flipAnimation } from './StyleUtils';

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
  user-select: none;

  ${flipAnimation}

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
  user-select: none;

  ${flipAnimation}

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

export const Label = ({ isFlipped, trackNum }) => {
  const flippedClasses = useMemo(
    () => ({
      flip: isFlipped === true,
      unflip: isFlipped === false,
    }),
    [isFlipped]
  );

  return (
    <LabelDiv className="flex-center">
      <TopText className={classNames(flippedClasses)}>Drone Sky</TopText>
      <HoleDiv />
      <BottomText className={classNames(flippedClasses)}>
        Side {trackNum}
      </BottomText>
    </LabelDiv>
  );
};
