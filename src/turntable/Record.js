import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import vectorizeText from 'vectorize-text';

const FLIP_TIME_IN_SECONDS = 1;
const FLIP_TIME_IN_MS = FLIP_TIME_IN_SECONDS * 1000;

const TheText = ({ text }) => {
  const polygons = vectorizeText(text, {
    font: 'Helvetica',
    fontWeight: 200,
    polygons: true,
    position: 'absolute',
    textBaseline: 'hanging',
    width: 100,
  });

  const svg = [
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%">',
  ];

  polygons.forEach(loops => {
    svg.push('<path d="');
    loops.forEach(loop => {
      const start = loop[0];
      svg.push('M ' + start[0] + ' ' + start[1]);
      for (let i = 1; i < loop.length; i++) {
        const p = loop[i];
        svg.push('L ' + p[0] + ' ' + p[1]);
      }
      svg.push('L ' + start[0] + ' ' + start[1]);
    });
    svg.push('" fill-rule="even-odd" stroke-width="1" fill="black"></path>');
  });
  svg.push('</svg>');

  return <span dangerouslySetInnerHTML={{ __html: svg.join('') }} />;
};

const RecordDiv = styled('div')`
  background: #161617;
  border-radius: 50%;
  height: 98%;
  width: 98%;

  @keyframes flip {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(180deg);
    }
  }

  @keyframes unflip {
    from {
      transform: rotateY(180deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  &.flip,
  .flip {
    animation: flip 1 ${FLIP_TIME_IN_SECONDS}s linear;
    animation-fill-mode: forwards;
  }

  &.unflip,
  .unflip {
    animation: unflip 1 ${FLIP_TIME_IN_SECONDS}s linear;
    animation-fill-mode: forwards;
  }
`;

const LabelDiv = styled('div')`
  background: white;
  border-radius: 50%;
  height: 43%;
  position: relative;
  width: 43%;
`;

const TopText = styled('div')`
  color: black;
  font-size: 2rem;
  font-weight: 200;
  position: absolute;
  text-align: center;
  top: 20%;
`;

const BottomText = styled('div')`
  position: absolute;
  bottom: 20%;
  color: black;
  font-size: 90%;
  font-weight: 200;
  text-align: center;
`;

const HoleDiv = styled('div')`
  background: #282c34;
  border-radius: 50%;
  height: 5%;
  width: 5%;
`;

export const Record = ({ isFlipped, onTouch, onRelease }) => {
  const [trackNum, setTrackNum] = useState(1);
  const flippedClasses = {
    flip: isFlipped === true,
    unflip: isFlipped === false,
  };

  useEffect(() => {
    if (isFlipped !== undefined) {
      setTimeout(() => setTrackNum(n => n + 1), FLIP_TIME_IN_MS / 2);
    }
  }, [isFlipped]);

  return (
    <RecordDiv
      className={classNames('flex-center', flippedClasses)}
      onMouseDown={onTouch}
      onMouseUp={onRelease}
    >
      <LabelDiv className="flex-center">
        <TopText className={classNames(flippedClasses)}>Drone Sky</TopText>
        <HoleDiv />
        <BottomText className={classNames(flippedClasses)}>
          Side {trackNum}
        </BottomText>
      </LabelDiv>
    </RecordDiv>
  );
};
