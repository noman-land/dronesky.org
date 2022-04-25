import styled from 'styled-components';

const ButtonHole = styled.div`
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

const Button = styled.button`
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

    @media (max-width: 700px) {
      transform: scale(0.9);
    }
    @media (max-width: 600px) {
      transform: scale(0.8);
    }
    @media (max-width: 500px) {
      transform: scale(0.7);
    }
    @media (max-width: 450px) {
      transform: scale(0.65);
    }
    @media (max-width: 400px) {
      transform: scale(0.6);
    }
    @media (max-width: 350px) {
      transform: scale(0.55);
    }
    @media (max-width: 300px) {
      transform: scale(0.5);
    }
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
