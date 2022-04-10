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

const baseImageStyles = style({
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',

  '@media': {
    [mediaQueries.sm]: {
      marginRight: '0',
      marginLeft: '0',
    },
  },
});

export const image = style([baseImageStyles]);

export const linkedImage = style([
  baseImageStyles,
  {
    ':hover': {
      boxShadow:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);',
      transition: 'shadow .2s',
    },
  },
]);
