import styled from 'styled-components';

const OFFSET = 382;

const clip = n => {
  const value = OFFSET - n;
  const max = 184;
  const min = -4;
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

const Slider = styled.div.attrs(({ screenY }) => ({
  style: { bottom: 92 },
}))`
  align-items: stretch;
  background-color: #AAA;
  border-radius: 2px;
  border: solid grey 2px;
  display: flex;
  height: 40px;
  justify-content: space-between;
  left: -4px;
  position: absolute;
  width: 36px;
`;

const HR = styled('hr')`
  border: solid #686868 2px;
  width: 100%;
`;

export const PitchAdjustSlider = ({ screenY }) => (
  <Slider
    screenY={screenY}
    draggable={true}
  >
    <HR />
  </Slider>
);
