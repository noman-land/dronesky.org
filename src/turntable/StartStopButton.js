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
const Button = styled('div')`
  align-items: center;
  background-color: #eee;
  display: flex;  
  font-size: 10px;
  height: 56px;
  justify-content: center;
  width: 72px;
`

export const StartStopButton = () => (
  <ButtonHousing>
    <Button>
      Start•Stop
    </Button>
  </ButtonHousing>
);
