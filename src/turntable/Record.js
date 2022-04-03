import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const RecordDiv = styled('div')`
  background: #161617;
  border-radius: 50%;
  height: 546px;
  width: 546px;
`

const LabelDiv = styled('div')`
  background: white;
  border-radius: 50%;
  height: 200px;
  position: relative;
  width: 200px;
`

const TopText = styled('div')`
  position: absolute;
  top: 40px;
  color: black;
  font-size: 2rem;
  font-weight: 200;
  text-align: center;
`

const BottomText = styled('div')`
  position: absolute;
  bottom: 40px;
  color: black;
  font-size: 1.5rem;
  font-weight: 200;
  text-align: center;
`

const HoleDiv = styled('div')`
  background: #282c34;
  border-radius: 50%;
  height: 12px;
  width: 12px;
`

export const Record = ({
  isFlipped,
  onTouch,
  onRelease,
}) => {
  const [trackNum, setTrackNum] = useState(1);
  const classes = {
    flip: isFlipped === true,
    unflip: isFlipped === false,
  };

  useEffect(() => {
    if (isFlipped !== undefined) {
      setTimeout(() => {
        setTrackNum(n => n + 1)
      },
        // Half the time it takes to flip (1000ms)
        500
      )
    }
  }, [isFlipped])

  return (
    <RecordDiv
      className={classNames('flex-center', classes)}
      onMouseDown={onTouch}
      onMouseUp={onRelease}
    >
      <LabelDiv className='flex-center'>
        <TopText className={classNames(classes)}>
          Drone Sky
        </TopText>
        <HoleDiv />
        <BottomText className={classNames(classes)}>
          Side {trackNum}
        </BottomText>
      </LabelDiv>
    </RecordDiv>
  );
}