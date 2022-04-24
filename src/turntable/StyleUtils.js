import { css } from 'styled-components';

import { FLIP_TIME_IN_SECONDS } from './Constants';

export const flipAnimation = css`
  &.flip {
    animation: flip 1 ${FLIP_TIME_IN_SECONDS}s linear;
    animation-fill-mode: forwards;
  }

  &.unflip {
    animation: unflip 1 ${FLIP_TIME_IN_SECONDS}s linear;
    animation-fill-mode: forwards;
  }
`;
