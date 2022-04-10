import Slider from 'rc-slider';
import styled from 'styled-components';

const PitchAdjustHole = styled('div')`
  background-color: #d1d1d6;
  border: solid black 2px;
  border-radius: 4px;
  bottom: 78px;
  display: flex;
  height: 224px;
  justify-content: center;
  position: absolute;
  right: 44px;
  width: 32px;

  &::before {
    background: #161617;
    border-radius: 4px;
    bottom: 11px;
    content: ' ';
    height: 202px;
    left: 12px;
    position: absolute;
    width: 8px;
  }
`;

const handleStyle = {
  background: '#ABABAB',
  border: 'solid 2px #161617',
  borderRadius: 3,
  boxShadow: 'none',
  height: 30,
  left: -8,
  opacity: 1,
  width: 40,
};

const displayNone = { display: 'none' };

export const PitchAdjustSlider = ({ onChange, value }) => (
  <PitchAdjustHole>
    <Slider
      handleStyle={handleStyle}
      onChange={onChange}
      railStyle={displayNone}
      trackStyle={displayNone}
      value={value}
      vertical={true}
    />
  </PitchAdjustHole>
);
