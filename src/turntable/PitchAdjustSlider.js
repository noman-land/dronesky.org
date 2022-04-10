import Slider from 'rc-slider';

export const PitchAdjustSlider = ({ onChange, value }) => (
  <Slider
    handleStyle={{
      background: '#ABABAB',
      border: 'solid 2px #161617',
      borderRadius: 3,
      height: 30,
      left: -12,
      opacity: 1,
      width: 48,
    }}
    onChange={onChange}
    railStyle={{ display: 'none' }}
    trackStyle={{ display: 'none' }}
    value={value}
    vertical={true}
  />
);
