import styled from 'styled-components';
import { useCallback, useState } from 'react';

const TonearmPad = styled('div')`
  align-items: center;
  border-radius: 50%;
  border: 2px solid #161617;
  display: flex;
  flex-direction: column;
  height: 223px;
  overflow: visible;
  position: absolute;
  right: 28px;
  top: 53px;
  width: 223px;
  z-index: 0;
`;

const TonearmContainer = styled.div`
  align-items: center;
  /* border: 1px solid #161617; */
  display: flex;
  flex-direction: column;
  height: 223px;
  overflow: visible;
  position: absolute;
  right: 28px;
  transform: rotateZ(0deg);
  top: 53px;
  width: 223px;
  z-index: 1;
`;

const TonearmRod = styled('div')`
  background: silver;
  border: 2px solid #777;
  border-bottom-style: none;
  border-radius: 4px 4px 0px 0px;
  height: 480px;
  position: absolute;
  top: -8px;
  width: 26px;
`;

const Counterweight = styled('div')`
  background: darkgrey;
  border-radius: 3px;
  border: 1px solid grey;
  height: 36px;
  position: relative;
  top: 8px;
  width: 56px;
`;

const CounterweightDial = styled('div')`
  background: #161617;
  border-radius: 0px 0px 3.5px 3.5px;
  /* border: 1px solid grey; */
  height: 16px;
  position: relative;
  width: 56px;
  top: 4px;

  &:after {
    border-top: 7px solid #161617;
    border-bottom: none;
    border-left: none;
    border-right: none;
    content: ' ';
    display: block;
    position: relative;
    /* width: 40px; */
    top: 14.3px;
    height: 0px;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
  }
`;

export const Tonearm = () => (
  <>
    {/* <TonearmPad /> */}
    <TonearmContainer>
      {/* <TonearmRod /> */}
      {/* <Counterweight /> */}
      {/* <CounterweightDial /> */}
    </TonearmContainer>
  </>
);
