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

  @media (max-width: 500px) {
    border-width: 1.5px;
  }
  @media (max-width: 425px) {
    border-width: 1px;
  }

  .rc-slider.rc-slider-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .rc-slider-rail {
      @media (max-width: 650px) {
        width: 3.5px;
      }
      @media (max-width: 600px) {
        width: 3.25px;
      }
      @media (max-width: 550px) {
        width: 3px;
      }
      @media (max-width: 425px) {
        width: 2px;
      }
    }

    @media (max-width: 500px) {
      padding: 0 4px;
      width: 12px;
    }
    @media (max-width: 425px) {
      width: 11px;
    }
    @media (max-width: 380px) {
      width: 10px;
    }
    @media (max-width: 350px) {
      padding: 0 3px;
    }
    @media (max-width: 300px) {
      padding: 0 2px;
    }
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
