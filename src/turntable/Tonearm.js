import styled from 'styled-components';
import { useCallback, useState } from 'react';

const TonearmPad = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 2px solid #161617;
  display: flex;
  flex-direction: column;
  height: 34.75%;
  overflow: visible;
  position: absolute;
  right: 3%;
  top: 8%;
  width: 26.95%;
  z-index: 0;

  @media (max-width: 650px) {
    border-width: 1.5px;
  }
  @media (max-width: 450px) {
    border-width: 1px;
  }
`;

const TonearmContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 34.75%;
  overflow: visible;
  position: absolute;
  right: 3%;
  transform: rotateZ(4.5deg);
  top: 8%;
  width: 26.95%;
  z-index: 1;

  /* opacity: 0.6;
  right: 17px; */
`;

const TonearmRod = styled.div`
  background: rgb(215, 215, 215);
  background: linear-gradient(
    90deg,
    rgba(215, 215, 215, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(215, 215, 215, 1) 100%
  );
  border: 2px solid #777;
  border-bottom-style: none;
  border-radius: 4px 4px 0px 0px;
  height: 480px;
  position: absolute;
  top: -8px;
  width: 26px;
`;

const Counterweight = styled.div`
  background: rgb(154, 154, 154);
  background: linear-gradient(
    90deg,
    rgba(154, 154, 154, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(154, 154, 154, 1) 100%
  );
  border-radius: 3px;
  border: 1px solid grey;
  height: 36px;
  position: relative;
  top: 8px;
  width: 56px;
`;

const CounterweightDial = styled.div`
  background: linear-gradient(
    90deg,
    rgba(22, 22, 23, 1) 0%,
    rgba(69, 69, 69, 1) 50%,
    rgba(22, 22, 23, 1) 100%
  );
  border-radius: 0px 0px 3.5px 3.5px;
  height: 16px;
  position: relative;
  width: 56px;
  top: 4px;

  &:after {
    background: linear-gradient(
      90deg,
      rgba(22, 22, 23, 1) 0%,
      rgba(69, 69, 69, 1) 50%,
      rgba(22, 22, 23, 1) 100%
    );
    border-top: 7px solid #161617;
    border-bottom: none;
    border-left: none;
    border-right: none;
    content: ' ';
    display: block;
    position: relative;
    top: 14.3px;
    height: 0px;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
  }
`;

export const Tonearm = () => (
  <>
    <TonearmPad />
    <TonearmContainer>
      {/* <TonearmRod />
      <Counterweight />
      <CounterweightDial /> */}
    </TonearmContainer>
  </>
);
