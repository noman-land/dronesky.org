import styled from 'styled-components';

const ButtonHousing = styled('div')`
  align-items: center;
  background-color: #161617;
  border-radius: 4px;
  bottom: 19px;
  display: flex;
  height: 64px;
  justify-content: center;
  left: 20px;
  position: absolute;
  width: 80px;
  `
const Button = styled('button')`
  align-items: center;
  background-color: #eee;
  border-radius: 2px;
  display: flex;  
  font-size: 10px;
  height: 56px;
  justify-content: center;
  width: 72px;

  .text {
    position: relative;
  }

  &:active {
    background-color: #dfdfdf;

    .text {
      margin-top: 2px;
      margin-left: 2px;
    }
  }
`

export const StartStopButton = ({ onClick }) => (
  <ButtonHousing>
    <Button onClick={onClick}>
      <span className="text">
        Start•Stop
      </span>
    </Button>
  </ButtonHousing>
);
