import { css } from 'styled-components';

import { FLIP_TIME_IN_SECONDS } from './Constants';

export const flipAnimation = css`
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

  &.flip {
    animation: flip 1 ${FLIP_TIME_IN_SECONDS}s linear;
    animation-fill-mode: forwards;
  }

  &.unflip {
    animation: unflip 1 ${FLIP_TIME_IN_SECONDS}s linear;
    animation-fill-mode: forwards;
  }
`;
