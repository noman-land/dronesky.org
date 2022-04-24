import classNames from 'classnames';
import styled from 'styled-components';
import { useEffect, useMemo, useState } from 'react';

import { FLIP_TIME_IN_MS } from './Constants';
import { Label } from './Label';
import { flipAnimation } from './StyleUtils';

const RecordDiv = styled('div')`
  background: #161617;
  border-radius: 50%;
  height: 98%;
  width: 98%;

  ${flipAnimation}
`;

export const Record = ({ isFlipped, onTouch, onRelease }) => {
  const [trackNum, setTrackNum] = useState(1);

  useEffect(() => {
    if (isFlipped !== undefined) {
      setTimeout(() => setTrackNum(n => n + 1), FLIP_TIME_IN_MS / 2);
    }
  }, [isFlipped]);

  const flippedClasses = useMemo(
    () => ({
      flip: isFlipped === true,
      unflip: isFlipped === false,
    }),
    [isFlipped]
  );

  return (
    <RecordDiv
      className={classNames('flex-center', flippedClasses)}
      onMouseDown={onTouch}
      onMouseUp={onRelease}
      onTouchEnd={onRelease}
      onTouchStart={onTouch}
    >
      <Label isFlipped={isFlipped} trackNum={trackNum} />
    </RecordDiv>
  );
};
