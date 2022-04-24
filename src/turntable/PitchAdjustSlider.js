import Slider from 'rc-slider';
import styled from 'styled-components';

const PitchAdjustHole = styled('div')`
  background-color: #d1d1d6;
  border: solid #111 2px;
  border-radius: 3px;
  bottom: 12.4%;
  display: flex;
  height: 34.8%;
  justify-content: center;
  /* opacity: 0.7; */
  position: absolute;
  right: 4.9%;
  width: 4.3%;

  .rc-slider.rc-slider-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const handleStyle = {
  background: '#ABABAB',
  border: '2px solid #999',
  borderRadius: 2,
  boxShadow: 'none',
  height: '16.5%',
  left: '-22%',
  opacity: 1,
  width: '216%',
};

const railStyle = {
  background: '#161617',
  display: 'flex',
  height: '88%',
};

const displayNone = { display: 'none' };

export const PitchAdjustSlider = ({ onChange, value }) => (
  <PitchAdjustHole>
    <Slider
      handleStyle={handleStyle}
      onChange={onChange}
      railStyle={railStyle}
      trackStyle={displayNone}
      value={value}
      vertical={true}
    />
  </PitchAdjustHole>
);
