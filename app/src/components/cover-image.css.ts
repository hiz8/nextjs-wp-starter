import { style } from '@vanilla-extract/css';
import { mediaQueries } from '../styles/theme.css';

export const root = style({
  '@media': {
    [mediaQueries.sm]: {
      marginRight: '0',
      marginLeft: '0',
    },
  },
});
