import { style } from '@vanilla-extract/css';
import { vars, mediaQueries } from '../styles/theme.css';

export const headline = style({
  marginBottom: vars.size[8],
  fontSize: vars.fontSizes['6xl'],
  fontWeight: 'bold',
  lineHeight: 1.25,
  letterSpacing: '-0.05em',
});

export const postList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  rowGap: vars.size[20],
  marginBottom: vars.size[32],

  '@media': {
    [mediaQueries.md]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      columnGap: vars.size[16],
      rowGap: vars.size[32],
    },
    [mediaQueries.lg]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      columnGap: vars.size[32],
    },
  },
});
