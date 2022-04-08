import styled from 'styled-components';

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
  <Button onClick={onClick}>
    <span className="text">
      Start•Stop
    </span>
  </Button>
);
