import styled from 'styled-components';

const ButtonHole = styled('div')`
  /* opacity: 0.6; */
  align-items: center;
  background-color: #161617;
  border-radius: 4px;
  bottom: 3.3%;
  display: flex;
  height: 9.8%;
  justify-content: center;
  left: 2.4%;
  position: absolute;
  width: 9.6%;
`;

const Button = styled('button')`
  /* opacity: 0.6; */
  align-items: center;
  background-color: #eee;
  border-radius: 2px;
  display: flex;
  height: 92%;
  justify-content: center;
  width: 92%;

  .text {
    /* font-size: 300%; */
    position: relative;
  }

  &:active {
    background-color: #dfdfdf;

    .text {
      margin-top: 2px;
      margin-left: 2px;
    }
  }
`;

export const StartStopButton = ({ isPlaying, onClick }) => (
  <ButtonHole>
    <Button onClick={onClick}>
      <span className="text">{isPlaying ? 'Stop' : 'Start'}</span>
    </Button>
  </ButtonHole>
);
